import { useState } from "react";
import { message } from "antd";
import { register } from "@/api/user";

interface RegisterProps {
  btnState: string;
}
export const Register: React.FC<RegisterProps> = ({ btnState }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const toRegister = async () => {
    const res = await register({
      username: username,
      password: password,
      email: email,
    });
    if (res.data.success) {
      messageApi.open({
        type: "success",
        content: "注册成功！",
      });
      resetFields();
    }
  };

  const resetFields = () => {
    setUsername("");
    setPassword("");
    setEmail("");
  };
  return (
    <>
      {contextHolder}
      <form
        id="register"
        className="input-group"
        style={{ left: btnState === "login" ? "500px" : "0px" }}
      >
        <input
          type="username"
          className="input-field"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          id="pwd"
          type="Password"
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="button"
          className="submit-btn"
          value="Register"
          onClick={() => toRegister()}
        />
      </form>
    </>
  );
};
