/*
 * @Author: 猿来如此丿 865657670@qq.com
 * @Date: 2024-08-16 09:04:18
 * @LastEditors: 猿来如此丿 865657670@qq.com
 * @LastEditTime: 2024-08-16 11:00:51
 * @FilePath: \blogFrontEnd\src\pages\about\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Form, Input, Row, Col } from "antd";
import { Link } from "react-router-dom";
const Contact = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="breadcrumbs mb-4">
            <Link to={"/"}>主页</Link>
            <span className="mx-1">/</span> <a href="#!">联系</a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pr-0 pr-lg-4">
            <div className="content">
              写字楼里写字间，写字间里程序员；
              <br />
              程序人员写程序，又拿程序换酒钱。
              <br />
              酒醒只在网上坐，酒醉还来网下眠；
              <br />
              酒醉酒醒日复日，网上网下年复年。
              <br />
              但愿老死电脑间，不愿鞠躬老板前；
              <br />
              奔驰宝马贵者趣，公交自行程序员。
              <br />
              别人笑我忒疯癫，我笑自己命太贱；
              <br />
              不见满街漂亮妹，哪个归得程序员？
              <br />
              <div className="mt-5">
                <p className="h3 mb-3 font-weight-normal">
                  <a className="text-dark" href="mailto:yolkmens@gmail.com">
                    yolkmens@gmail.com
                  </a>
                </p>
                {/* <p className="mb-3">
                  <a className="text-dark" href="tel:&#43;211234565523">
                    &#43;211234565523
                  </a>
                </p> */}
                <p className="mb-2">广东省深圳市南山区</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <Form
            name="basic"
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row>
              <Col span={9}>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="姓名" />
                </Form.Item>
              </Col>
              <Col span={9} offset={6}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="邮箱" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="标题" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.TextArea
                    size="large"
                    placeholder="请输入信息"
                    autoSize={{ minRows: 6, maxRows: 10 }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 10,
              }}
            >
              <Button type="primary" block size={'large'} htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
