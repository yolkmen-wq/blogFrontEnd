import { Modal, Form, Input, Button, Checkbox, FormProps, message } from "antd";
import { useEffect, useState } from "react";
import { registerVisitor } from "@/api/user";
import { useDispatch, useSelector } from "react-redux";
import { setVisitorInfo } from "@/store/modules/visitorSlice";

interface ICommentModalProps {
  modelValue: boolean;
  setIsModalOpen: (value: boolean) => void;
}

type FieldType = {
  nickname?: string;
  email?: string;
  remember?: string;
};

const CommentModal: React.FC<ICommentModalProps> = ({
  modelValue,
  setIsModalOpen,
}) => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [ip, setIp] = useState<string>("");
  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        // console.log("用户的 IP 地址是:", data.ip);
        setIp(data.ip);
      })
      .catch((error) => {
        console.error("获取 IP 地址出错:", error);
      });
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values: any) => {
    console.log("Success:", values);
    const res = await registerVisitor({ ...values, ip });
    if (res.data.success) {
      dispatch(setVisitorInfo(res.data.data));
      messageApi.open({
        type: "success",
        content: "创建成功！",
      });
      form.resetFields();
      handleCancel();
    } else {
      messageApi.open({
        type: "error",
        content: res.data.message,
      });
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo: any
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {contextHolder}
      <Modal
        title={
          <div className="text-base text-gray-800 font-semibold">发表评论</div>
        }
        width="300px"
        open={modelValue}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Form.Item<FieldType>
            label="nickname"
            name="nickname"
            rules={[{ required: true, message: "昵称不能为空！" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="email"
            name="email"
            rules={[{ required: true, message: "邮箱不能为空！" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 18, span: 6 }}>
            <Button type="primary" htmlType="submit" onClick={showModal}>
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CommentModal;
