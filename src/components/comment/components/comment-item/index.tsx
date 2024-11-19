import CommentInput from "../comment-input";
import { formatDateToText } from "@/utils";
import { useEffect, useMemo, useState } from "react";
import {
  Zansolid,
  Zan,
  Commentsolid,
  Comment,
} from "../../../../assets/icon/icon";
import { ICommentItem } from "../../hooks/interface";
import debounce from "lodash/debounce";
import { useSelector, useDispatch } from "react-redux";
import { toggleCommentLike } from "@/api/comment";

interface commentProps {
  isChildren?: boolean;
  comment: ICommentItem;
  parentComment?: ICommentItem;
  children?: React.ReactNode;
  updateComment?: (comment: ICommentItem) => ICommentItem | void;
  refetchComment?: () => void;
  submit?: (
    comment: string,
    replyId?: number,
    parentId?: number
  ) => Promise<void>;
  showDialog?: () => void;
}

const CommentItem: React.FC<commentProps> = ({
  isChildren,
  comment,
  parentComment,
  children,
  updateComment,
  refetchComment,
  submit,
  showDialog,
}) => {
  const [state, setState] = useState({
    toogleCommentBtn: false,
    commentValue: "",
    hasLiked: false,
  });
  const [hoverState, setHover] = useState({
    zanHover: false,
    commentHover: false,
  });
  const [replyCOntent, setReplyContent] = useState("");
  useEffect(() => {
    if (comment.replyId) {
      parentComment &&
        parentComment.children.map((item) => {
          if (item.id === comment.replyId) {
            setReplyContent(item.content as string);
          }
        });
    } else {
      setReplyContent(parentComment?.content as string);
    }
  }, [parentComment]);

  /** 评论id */
  const commentId = useMemo(() => comment.id, [comment.id]);
  /** 访客信息 */
  const visitor = useSelector((state: any) => state.visitorSlice);
  /** 访客id */
  const visitorId = useMemo(() => visitor && visitor.id, [visitor]);

  /** 评论点赞列表 */
  // const commentLikeList = useMemo(
  //   () => comment.likeList.filter((item) => item.visitorId),
  //   [comment.likeList]
  // );

  /** 当前评论是否被当前用户点赞过 */
  useEffect(() => {
    if (comment.isLiked == 1) {
      setState((prev) => ({ ...prev, hasLiked: true }));
    } else {
      setState((prev) => ({ ...prev, hasLiked: false }));
    }
  }, [comment.isLiked]);

  const handleAddLike = () => {
    setState((prev) => ({ ...prev, hasLiked: !prev.hasLiked }));
    if (visitorId) {
      const func = debounce(async () => {
        const res = await toggleCommentLike({ commentId, visitorId });
        if (res.data.success) {
          refetchComment && refetchComment();
        }
      }, 500);
      func();
    } else {
      showDialog && showDialog();
    }
  };

  const handleToggleCommentBtn = (e: React.MouseEvent<HTMLDivElement>) => {
    if (visitorId) {
      setState((prev) => ({
        ...prev,
        toogleCommentBtn: !prev.toogleCommentBtn,
        commentValue: "",
      }));
    } else {
      showDialog && showDialog();
    }
  };

  const handleSubmitComment = async (
    comment: string,
    rePlyId?: number | undefined,
    parentId?: number | undefined
  ) => {
    const commentStr = state.commentValue;
    if (submit) {
      submit(commentStr, rePlyId, parentId);
      setState((prev) => ({
        ...prev,
        toogleCommentBtn: false,
        commentValue: "",
      }));
    }
  };

  const handleUpdateComment = (commentStr: ICommentItem) => {
    if (updateComment) {
      updateComment(commentStr);
    }
  };

  const handleRefetchComment = () => {
    if (refetchComment) {
      refetchComment();
    }
  };

  const setVal = (val: string) => {
    setState((prev) => ({ ...prev, commentValue: val }));
  };

  return (
    <div className={`d-flex ${isChildren ? "py-0 pt-6" : "py-4"} `}>
      {/* 头像 */}
      <img
        className={`w-10 h-10 rounded-2xl border border-gray-400 ${
          isChildren ? "w-6 h-6" : "w-10 h-10"
        }`}
        src={
          comment.portrait || require("../../../../assets/images/avatar.png")
        }
        alt={comment.nickname}
      />
      <div className="flex-1 ml-4">
        {/* 评论内容 */}
        <div>
          <div className="d-flex items-center">
            <div className="d-flex items-center">
              <div className="text-xl text-gray-800 font-medium">
                {comment.nickname}
              </div>
              {/* 存在父级评论时 */}
              {parentComment && (
                <div className="d-flex items-center">
                  <span className="px-3 text-xl">回复</span>
                  <div className="text-xl text-gray-800 font-medium">
                    {parentComment.nickname}
                  </div>
                </div>
              )}
            </div>
            <span className="ml-auto text-lg text-gray-400">
              {formatDateToText(comment.createTime, false)}
            </span>
          </div>
          <div
            className="my-2 text-lg text-gray-700 break-all"
            dangerouslySetInnerHTML={{ __html: comment.content }}
          ></div>
          {parentComment && parentComment.content && (
            <div className="mt-2 mb-3 px-3 py-1 bg-gray-100 border-gray-200 border rounded">
              <div
                className="text-lg text-gray-500 break-all"
                dangerouslySetInnerHTML={{
                  __html: replyCOntent,
                }}
              ></div>
            </div>
          )}
        </div>
        {/* 评论操作：点赞和回复 */}
        <div className="d-flex items-center">
          <div
            className={`d-flex items-center text-sm cursor-pointer text-gray-400 mr-4 icon-hover ${
              state.hasLiked ? "text-active" : ""
            }`}
            onClick={handleAddLike}
            onMouseOver={() => {
              setHover((state) => ({ ...state, zanHover: true }));
            }}
            onMouseOut={() => {
              setHover((state) => ({ ...state, zanHover: false }));
            }}
          >
            {state.hasLiked || hoverState.zanHover ? <Zan /> : <Zansolid />}

            <span className="ml-1">
              {comment.likeCount > 0 ? comment.likeCount : "点赞"}
            </span>
          </div>

          <div
            className={`d-flex items-center text-sm cursor-pointer text-gray-400 icon-hover ${
              state.toogleCommentBtn ? "text-active" : ""
            } `}
            onClick={(e) => handleToggleCommentBtn(e)}
            onMouseOver={() => {
              setHover((state) => ({ ...state, commentHover: true }));
            }}
            onMouseOut={() => {
              setHover((state) => ({ ...state, commentHover: false }));
            }}
          >
            {state.toogleCommentBtn || hoverState.commentHover ? (
              <Comment />
            ) : (
              <Commentsolid />
            )}
            <span className="ml-1">
              {state.toogleCommentBtn ? "取消回复" : "回复"}
            </span>
          </div>
        </div>
        {state.toogleCommentBtn && (
          <CommentInput
            modelValue={state.commentValue}
            className={`mt-3 mb-10 ${isChildren ? "mb-0" : "mb-6"}`}
            focus={true}
            replyId={comment.id}
            parentId={parentComment ? parentComment.id : undefined}
            setVal={setVal}
            submit={handleSubmitComment}
            placeholder={`回复 ${comment.nickname}...`}
          />
        )}

        {children && children}
      </div>
    </div>
  );
};

export default CommentItem;
