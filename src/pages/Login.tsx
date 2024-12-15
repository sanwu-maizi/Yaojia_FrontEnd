import { useEffect, useState } from "react";
import "./Login.css";
import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { message, Input } from "antd";
import { getVerificationCode, login, register } from "../api";
import { setUserStore } from "../utils/store";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [status, setStatus] = useState(0); // 0: 默认登录状态, 1: 注册状态
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("")
  const [messageApi, contextHolder] = message.useMessage();
  const navi = useNavigate();
  useEffect(() => {
    setUsername("");
    setEmail("");
    setPassword("");
  }, [status]);

  const handleLogin = async () => {
    try {
      console.log(email, password)
      const { data } = await login({
        userEmail: email,
        userPassword: password
       });
       console.log(data)
      const { code, message } = data;
      if (code === 200  || Number(code) === 200) {
        handleSuccess(data.data)
      } else {
        throw new Error("Error: " + message);
      }
    } catch {
      messageApi.error("登录异常");
    }
  };

  // TO COMFIRM
  const handleRegister = async () => {
    try {
      const { data } = await register({
        userEmail: email,
        userPassword: password,
        code: code,
        userName: username
       });
       const { message, } = data;
       if (data.code === 200 || Number(data.code) === 200) {
        handleSuccess(data.data)
       } else {
         throw new Error("Error: " + message);
       }
    } catch {
      messageApi.error("注册异常");
    }
  };

  const handleSuccess = (response: any) => {
    setUserStore(response);
    navi("/")
  }

  const handleSendCode = async () => {
    if (!email) {
      messageApi.error("请输入验证码");
    }
    try {
      const { data } = await getVerificationCode({
        userEmail: email
      });
    } catch {
      throw new Error("验证码发生异常");
    }
  }

  return (
    <>
      {contextHolder}
      <div className="background">
        <div className="login">
          <div className="login-yaojia">
            <img
              src="https://obs-yaojia.obs.cn-north-4.myhuaweicloud.com/img/%E8%8D%AF%E7%93%B6.png"
              alt="药家"
            />
          </div>
          <div className="login-tel">
            {status === 0 ? (
              <>
                <Input
                  className="login-input"
                  type="text"
                  placeholder="输入邮箱"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  className="login-input"
                  type="password"
                  placeholder="输入密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </>
            ) : (
              <>
                <Input
                  className="login-input"
                  type="text"
                  placeholder="设置用户名"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  className="login-input"
                  type="password"
                  placeholder="设置邮箱"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  className="login-input"
                  type="password"
                  placeholder="设置密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </>
            )}
            <button
              className="login-btn"
              type="submit"
              onClick={status === 0 ? handleLogin : handleRegister}
            >
              {status === 0 ? "登录" : "注册"}
            </button>
            <span
              onClick={() =>
                setStatus((prevStatus) => (prevStatus === 0 ? 1 : 0))
              }
            >
              {status === 0 ? "帐号密码注册" : "返回登录"}
            </span>
            {status === 1 && (
              <span
                onClick={() => {
                  handleSendCode();
                }}
              >
                请求验证码
              </span>
            )}
          </div>

          {/* 登录方式 Logo */}
          <div className="login-logo">
            <div className="login-logo-item">
              <GithubOutlined className="icon" />
            </div>
            <div className="login-logo-item">
              <GoogleOutlined className="icon" />
            </div>
            <div className="login-logo-item">
              <FacebookOutlined className="icon" />
            </div>
          </div>

          {/* 账号切换和协议 */}
          <div className="login-account">
            {/* 已有太空站账号 */}
            <svg
              className="icon6"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M385.536 102.4l398.848 364.544c12.288 10.752 19.456 26.624 19.456 43.008..."
                fill="#7F7F7F"
              ></path>
            </svg>
          </div>
          <div className="login-last">同意《用户协议》和《隐私协议》</div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
