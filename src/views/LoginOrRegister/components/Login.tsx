import { useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { login, getCaptcha } from "@/api/user";
import { useDispatch } from "react-redux";
import { setVisitorInfo } from "@/store/modules/visitorSlice";
import _ from "lodash";

interface LoginProps {
  btnState: string;
}
export const Login: React.FC<LoginProps> = ({ btnState }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState({
    b64s: "",
    id: "",
  });
  const [messageApi, contextHolder] = message.useMessage();

  
  useEffect(() => {
    getCaptchaImg();
  }, []);

  const getCaptchaImg = _.debounce(async () => {
    const res = await getCaptcha();
    setCaptcha(res?.data.data);
  }, 500);

  const toLogin = async () => {
    try {
      const res = await login({
        username: username,
        password: password,
        code: code,
        captchaId: captcha.id,
      });
      if (res.data.success) {
        messageApi.open({
          type: "success",
          content: "登录成功！",
        });
        //登录成功后，将token和userInfo存入localStorage
        dispatch(setVisitorInfo(res.data.data.userInfo))
        localStorage.setItem("token", res.data.data.token);
        navigate(-1)
        resetFields();
      }
    } catch (err) {
      if(err){
        messageApi.open({
          type: "error",
          content: err as ReactNode,
        });
        //刷新验证码
        getCaptchaImg();
      }
    }
  };

  const resetFields = () => {
    setUsername("");
    setCode("");
    setPassword("");
  };

  return (
    <>
      {contextHolder}
      <form
        id="login"
        className="input-group"
        style={{ left: btnState === "login" ? "0px" : "-500px" }}
      >
        <input
          type="text"
          className="input-field"
          placeholder="User"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div className="captcha">
          <input
            type="text"
            className="input-field"
            placeholder="Code"
            maxLength={5}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <img
            className="captcha-img"
            src={captcha.b64s}
            alt="captcha"
            onClick={() => getCaptchaImg()}
          />
        </div>

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
          value="Log in"
          onClick={() => toLogin()}
        />
      </form>
    </>
  );
};
