import { Input, Button } from "antd";
import { useMemo, useState } from "react";

interface CommentInputProps {
  className?: string;
  modelValue?: string;
  placeholder?: string;
  replyId?: number;
  parentId?: number;
  focus?: boolean;
  commentValue?: string;
  commentContext?: any;
  showDialog?: () => void;
  submit?: (
    comment: string,
    rePlyId?: number,
    parentId?: number
  ) => Promise<void>;
  setVal?: (val: string) => void;
}
const CommentInput: React.FC<CommentInputProps> = ({
  className,
  modelValue,
  placeholder,
  replyId,
  parentId,
  focus,
  showDialog,
  submit,
  setVal,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const isMacOS = useMemo(() => {
    return /Mac|iPad|iPhone|iPod/.test(navigator.userAgent);
  }, [navigator.userAgent]);
  const keyboardDesc = useMemo(() => {
    if (isMacOS) {
      return "⌘ + Enter";
    }
    return "Ctrl + Enter";
  }, [isMacOS]);

  /** 是否展示操作按钮 */
  const displayOperate = useMemo(() => {
    return (modelValue && modelValue.length > 0) || isFocus;
  }, [modelValue, isFocus]);

  const valueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setVal && setVal(target.value);
  };

  const handleSubmit = (
    e:
      | React.KeyboardEvent<HTMLTextAreaElement | HTMLElement>
      | React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();
    console.log("submit");
    if (submit) {
      submit(modelValue as string, replyId as number, parentId as number);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    console.log("focus");
    setIsFocus(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className={className} onClick={() => showDialog && showDialog()}>
      <Input.TextArea
        placeholder={placeholder}
        autoFocus={focus}
        autoSize={{ minRows: 2, maxRows: 6 }}
        style={{ padding: "8px 12px 8px 12px", height: "64px" }}
        onChange={(e) => valueChange(e)}
        onPressEnter={(e) => handleSubmit(e)}
        onFocus={(e) => handleFocus(e)}
        onBlur={() => setIsFocus(false)}
      />
      {displayOperate && (
        <div className="d-flex mt-2 absolute right-9">
          {" "}
          {/* <!-- 表情和图片 --> */}
          <div></div>
          {/* <!-- 评论按钮 --> */}
          <div className="flex-initial shrink-0 ml-auto">
            <span className="mr-4 text-sm text-gray-400">{keyboardDesc}</span>
            <Button
              type="primary"
              disabled={!(modelValue && modelValue.length > 0)}
              onClick={(e) => handleSubmit(e)}
              onKeyDown={(e) => handleKeyDown(e)}
            >
              发表评论
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentInput;
