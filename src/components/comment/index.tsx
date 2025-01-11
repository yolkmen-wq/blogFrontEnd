import CommentInput from "./components/comment-input";
import CommentItem from "./components/comment-item";
import CommentModal from "./components/comment-modal";
import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@/assets/icon/icon";
import {
  CommentTypeName,
  IAddCommentParams,
  ICommentItem,
} from "./hooks/interface";
import { Upload, message, UploadProps } from "antd";
import { createComment, getComments } from "@/api/comment";
import { useSelector, useDispatch } from "react-redux";
import { getCommentsByArticleId } from "@/store/modules/commentSlice";

interface ICommentProps {
  articleId: number | string;
  type?: string;
}

const Comment: React.FC<ICommentProps> = ({ articleId, type }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [visitor, setVisitor] = useState<any>({});
  // const [showDialog, setShowDialog] = useState(false);
  const [CommentValue, setCommentValue] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const visitorData = localStorage.getItem("visitor");
  const parsedVisitor = visitorData ? JSON.parse(visitorData) : { id: null };
  const { id } = parsedVisitor;
  const { commentList } = useSelector((state: any) => state.commentSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    if (articleId) {
      if (id) {
        getCommentsByArticleId(Number(articleId), Number(id))(dispatch);
      } else {
        getCommentsByArticleId(Number(articleId))(dispatch);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (commentList.length > 0) {
      setComments(commentList);
    }
  }, [commentList]);

  // const setIsModalOpen = (isModalOpen: boolean) => {
  //   setShowDialog(isModalOpen);
  // };

  const setVal = (val: string) => {
    setCommentValue(val);
  };

  const handleUpdateComment = (comment: ICommentItem) => {
    // if (comments) {
    //   let commentsMaped = comments.map((item) => {
    //     if (item.id === comment.id) {
    //       return comment;
    //     }
    //     return item;
    //   });
    //   setComments(commentsMaped);
    // }
  };

  const handldReFetchComment = () => {
    if (id) {
      getCommentsByArticleId(Number(articleId), Number(id))(dispatch);
    } else {
      getCommentsByArticleId(Number(articleId))(dispatch);
    }
  };

  /* 暂时不用上传头像功能 */
  // /** 用户头像上传前触发的钩子函数 */
  // const beforeAvatarUpload = (file: File) => {
  //   const isJPG = file.type === "image/jpeg";
  //   const isPNG = file.type === "image/png";
  //   const isLt2M = file.size / 1024 / 1024 < 1;

  //   if (!isJPG && !isPNG) {
  //     messageApi.open({
  //       type: "error",
  //       content: "上传头像图片只能是 JPG 或 PNG 格式!",
  //     });
  //   }
  //   if (!isLt2M) {
  //     messageApi.open({
  //       type: "error",
  //       content: "上传头像图片大小不能超过 1MB!",
  //     });
  //   }
  //   return (isJPG || isPNG) && isLt2M;
  // };

  // /** 用户头像上传成功出发的钩子函数 */
  // const handleAvatarSuccess = async (res: {
  //   success: boolean;
  //   data: { url: string };
  // }) => {
  //   if (res.success) {
  //     let url = res.data.url;
  //     let fileUrl = "";
  //     url.split("\\").forEach((item) => {
  //       fileUrl += item + "/";
  //     });
  //     fileUrl = fileUrl.substring(0, fileUrl.length - 1);
  //     const filePath = process.env.REACT_APP_API_URL + fileUrl;
  //     // store.commit("visitor/setVisitor", {
  //     //   ...visitor.value,
  //     //   portrait: filePath,
  //     // });
  //     /** 把上传的头像更新到数据库中 */
  //     if (visitor.value.id) {
  //       // await updatePortrait(visitor.value.id, filePath);
  //       // store.commit("visitor/setVisitor", {
  //       //   ...visitor.value,
  //       //   portrait: filePath,
  //       // });
  //     }
  //   }
  // };

  const handleChange: UploadProps["onChange"] = (info) => {
    // if(info.file.status === 'done'&&info.file.response.status==="success'){}
  };

  /** 用户输入评论前，校验是否登录过 */
  const handleShowDialog = () => {
    if (!id) {
      navigate("/login");
      // setShowDialog(true);
    }
  };

  /** 发表评论 */
  const handleSubmitComment = async (
    comment: string,
    rePlyId?: number,
    parentId?: number
  ) => {
    if (id && type) {
      if (type) {
        let typeName: CommentTypeName = "articleId";
        switch (type as string) {
          case "talk":
            typeName = "talkId";
            break;
          case "article":
            typeName = "articleId";
            break;
          case "novel":
            typeName = "novelId";
            break;
          case "about":
            typeName = "aboutId";
            break;
          default:
            typeName = "articleId";
            break;
        }
        const params: IAddCommentParams = {
          articleId: Number(articleId),
          userId: Number(id),
          parentId: Number(parentId) || null,
          rePlyId: Number(rePlyId) || null,
          content: comment,
          typeName,
          publishTime: Number(Date.now() / 1000),
        };
        await createComment(params);
        handldReFetchComment();
        //   await addComment(params);
        //   if (!beCommentId) {
        //     commentValue.value = "";
        //   }
        //   refetch.value();
      }
    }
  };
  return (
    <div className="px-8 pb-6 mt-4 bg-white">
      {/* 发表评论 */}
      <div className="pt-6">
        {/* 标题  */}
        <div className="text-lg text-gray-800 font-semibold mb-6">评论</div>
        {/* 发表评论输入框 */}
        <div className="d-flex">
          {!visitor.id ? (
            <Avatar />
          ) : (
            <Upload
              action={process.env.REACT_APP_API_URL + "/uploadImage"}
              showUploadList={false}
              // beforeUpload={beforeAvatarUpload}
              onChange={handleChange}
            >
              {visitor.portrait ? (
                <img
                  className="w-10 h-10 rounded-2xl border border-gray-400 box-border"
                  src={visitor.portrait}
                />
              ) : (
                <Avatar />
              )}
            </Upload>
          )}
          <CommentInput
            className="flex-1 ml-4 mb-8"
            modelValue={CommentValue}
            showDialog={handleShowDialog}
            submit={handleSubmitComment}
            setVal={setVal}
          />
        </div>
        {/* 热门评论  */}
        {/* 全部评论  */}
        {comments && comments.length > 0 && (
          <div className="pt-8">
            <div className="text-2xl text-gray-800 font-semibold py-2">
              全部评论
            </div>
            <div>
              {comments.length > 0 &&
                comments.map((comment: any) => {
                  return (
                    <CommentItem
                      key={comment.id}
                      comment={comment}
                      updateComment={handleUpdateComment}
                      refetchComment={handldReFetchComment}
                      submit={handleSubmitComment}
                    >
                      {comment.children && comment.children.length > 0 && (
                        <div className="px-4 pb-4 mt-4 rounded bg-gray-50">
                          {comment.children.map((commentItem: any) => (
                            <CommentItem
                              comment={commentItem}
                              key={commentItem.id}
                              isChildren={true}
                              parentComment={comment}
                              updateComment={handleUpdateComment}
                              refetchComment={handldReFetchComment}
                              submit={handleSubmitComment}
                              showDialog={handleShowDialog}
                            />
                          ))}
                        </div>
                      )}
                    </CommentItem>
                  );
                })}
            </div>
          </div>
        )}
        {/* <CommentModal modelValue={showDialog} setIsModalOpen={setIsModalOpen} /> */}
      </div>
    </div>
  );
};

export default Comment;
