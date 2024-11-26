import { useState } from "react";
import "./Login.css"; // 引入CSS样式文件
import { FacebookOutlined, GithubOutlined, GoogleOutlined } from "@ant-design/icons";

const LoginPage = () => {
  const [status, setStatus] = useState(0); // 0: 默认登录状态, 1: 注册状态
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState([{ username: "admin", password: "123" }]);

  const handleLogin = () => {
    const user = userData.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      alert("登录成功！");
    } else {
      alert("用户名或密码错误！");
    }
  };

  const handleRegister = () => {
    const userExists = userData.find((user) => user.username === username);
    if (userExists) {
      alert("用户已存在！");
    } else {
      setUserData([...userData, { username, password }]);
      alert("注册成功，请登录！");
      setStatus(0); // 注册完成后切换到登录状态
    }
  };

  return (
    <div className="background">
      <div className="login">
        <div className="login-yaojia">
          <img
            src="https://obs-yaojia.obs.cn-north-4.myhuaweicloud.com/img/%E8%8D%AF%E7%93%B6.png"
            alt="药家"
          />
        </div>

        {/* 输入区域 */}
        <div className="login-tel">
          {status === 0 ? (
            <>
              <input
                className="login-tel-input"
                type="text"
                placeholder="输入用户名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="login-tel-code"
                type="password"
                placeholder="输入密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          ) : (
            <>
              <input
                className="login-tel-input"
                type="text"
                placeholder="输入新用户名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="login-tel-code"
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
          <span onClick={() => setStatus((prevStatus) => (prevStatus === 0 ? 1 : 0))}>
            {status === 0 ? "帐号密码注册" : "返回登录"}
          </span>
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
          <svg className="icon6" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M385.536 102.4l398.848 364.544c12.288 10.752 19.456 26.624 19.456 43.008..."
              fill="#7F7F7F"
            ></path>
          </svg>
        </div>
        <div className="login-last">同意《用户协议》和《隐私协议》</div>
      </div>
    </div>
  );
};

export default LoginPage;
