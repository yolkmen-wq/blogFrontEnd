import "./index.scss";
import { useState } from "react";
import { Login } from "./components/Login";
import { Register } from "./components/Register";

const LoginOrRegister = () => {
  const [btnState, setBtnState] = useState("login");

  return (
    <>
      <div className="hero">
        <div className="main-box">
          <div className="form-box">
            <div
              id="after"
              style={{
                left: btnState === "login" ? "50%" : "0",
                top: btnState === "login" ? "0" : "50%",
              }}
            ></div>
            <div className="button-box">
              <div
                id="btn"
                style={{ left: btnState === "login" ? "0px" : "110px" }}
              ></div>
              <button
                id="log"
                type="button"
                className="toggle-btn"
                style={{
                  color:
                    btnState === "login" ? "#252525" : "rgb(234, 234, 235)",
                }}
                onClick={() => setBtnState("login")}
              >
                Log in
              </button>
              <button
                id="reg"
                type="button"
                className="toggle-btn"
                style={{
                  color:
                    btnState === "login" ? "rgb(234, 234, 235)" : "#252525",
                }}
                onClick={() => setBtnState("register")}
              >
                Register
              </button>
            </div>
            <div className="social-icons">
              <a className="icon-link" href="#">
                <i className="fab fa-facebook cont-icon"></i>
              </a>
              <a className="icon-link" href="#">
                <i className="fab fa-instagram cont-icon"></i>
              </a>
              <a className="icon-link" href="#">
                <i className="fab fa-github cont-icon"></i>
              </a>
            </div>
            {btnState === "login" ? (
              <Login btnState={btnState} />
            ) : (
              <Register btnState={btnState} />
            )}
          </div>
          <span className="sp sp-t"></span>
          <span className="sp sp-r"></span>
          <span className="sp sp-b"></span>
          <span className="sp sp-l"></span>
        </div>
      </div>
    </>
  );
};

export default LoginOrRegister;
