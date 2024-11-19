import { Fragment, useState, useMemo, useEffect } from "react";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import type { FormProps } from "antd";
import { Button, message, Form, Input, Select, Segmented } from "antd";
import { createArticle, createLink, getTags } from "@/api/article";
import { useTranslation } from "react-i18next";
import {} from "@/api/article";

const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 1 },
  wrapperCol: { span: 22 },
};
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
type Tag = {
  tagId: number;
  tagName: string;
};

const EditPage = () => {
  const [t] = useTranslation();
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);
  const [mode, setMode] = useState(t("article_publish"));

  useEffect(() => {
    getTags().then((res) => {
      setTags(res.data.data);
    });
  }, [getTags]);
  const modules = useMemo(
    () => ({
      syntax: {
        highlight: (text: string) => {
          return hljs.highlightAuto(text).value;
        },
      },
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
        ["align-left", "align-center", "align-right", "align-justify"], // 文字对齐
        ["bold", "italic", "underline"], // 加粗、斜体、下划线
        ["link", "image", "video"], // 链接、图片、视频
        [{ formula: null }], // 公式
        // 其他工具栏选项
        ["code-block"],
        ["clean"], // 清除样式
      ],
    }),
    []
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "link",
    "image",
    "code-block",
  ];
  const handleChange = (content: string) => {
    setValue(content);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    if (mode === t("article_publish")) {
      createArticle(values)
        .then(() => {
          messageApi.open({
            type: "success",
            content: t("create_success"),
          });
          form.resetFields();
        })
        .catch((err) => {
          messageApi.open({
            type: "error",
            content: err,
          });
        });
    } else {
      createLink(values)
        .then(() => {
          messageApi.open({
            type: "success",
            content: t("create_success"),
          });
          form.resetFields();
        })
        .catch((err) => {
          messageApi.open({
            type: "error",
            content: err,
          });
        });
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  const onFormVariantChange = (changedValues: any) => {
    console.log("changedValues", changedValues);
    setMode(changedValues);
  };
  return (
    <Fragment>
      {contextHolder}
      <Form
        name="basic"
        {...formItemLayout}
        style={{ width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <Form.Item label={t("variant")} name="variant">
          <Segmented
            options={[t("article_publish"), t("link_publish")]}
            onChange={onFormVariantChange}
          />
        </Form.Item>
        {mode === t("article_publish") && (
          <>
            <Form.Item
              name="title"
              label={t("title")}
              wrapperCol={{ span: 6 }}
              rules={[{ required: true, message: t("title_required") }]}
            >
              <Input size="large" placeholder={t("title")} />
            </Form.Item>

            <Form.Item
              name="brief"
              label={t("brief")}
              wrapperCol={{ span: 6 }}
              rules={[{ required: true, message: t("brief_required") }]}
            >
              <Input.TextArea
                size="large"
                placeholder={t("brief")}
                autoSize={{ minRows: 2, maxRows: 6 }}
              />
            </Form.Item>
            <Form.Item
              name="content"
              label={t("article")}
              hasFeedback
              rules={[{ required: true, message: t("article_required") }]}
            >
              <ReactQuill
                value={value}
                onChange={handleChange}
                modules={modules}
                formats={formats}
              />
            </Form.Item>
            <Form.Item
              name="tags"
              label={t("tags")}
              hasFeedback
              wrapperCol={{ span: 6 }}
              rules={[{ required: true, message: t("tags_required") }]}
            >
              <Select mode="multiple" placeholder={t("tags_placeholder")}>
                {/* <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option> */}
                {tags.map((tag: Tag) => (
                  <Option key={tag.tagId} value={tag.tagId}>
                    {tag.tagName}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </>
        )}
        {mode === t("link_publish") && (
          <>
            <Form.Item
              name="title"
              label={t("title")}
              wrapperCol={{ span: 6 }}
              rules={[{ required: true, message: t("title_required") }]}
            >
              <Input size="large" placeholder={t("title")} />
            </Form.Item>

            <Form.Item
              name="link"
              label={t("link")}
              wrapperCol={{ span: 6 }}
              rules={[{ required: true, message: t("link_required") }]}
            >
              <Input size="large" placeholder={t("link")} />
            </Form.Item>
            <Form.Item name="linkType" label={t("linkType")}>
              <Select>
                <Select.Option value="学习站点">学习站点</Select.Option>
                <Select.Option value="常用工具">常用工具</Select.Option>
              </Select>
            </Form.Item>
          </>
        )}

        <Form.Item wrapperCol={{ offset: 22, span: 2 }}>
          <Button type="primary" htmlType="submit">
            {t("submit")}
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default EditPage;
