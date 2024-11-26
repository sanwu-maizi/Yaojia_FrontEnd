import { memo, useState } from "react";
import "./Login.css";
function Login() {
  const BUTTON_TEXT = "立即登录";
  const [isLogin, setIsLogin] = useState(false);
  const handleClick = () => {
    setIsLogin(true);
  };
  return (
    <div className="page" onClick={handleClick}>
      <div className="login">
        <div className="login_title">登录</div>
        <button className="login_button">{BUTTON_TEXT}</button>
      </div>
      {isLogin && <div className="login_success">登录成功</div>}
    </div>
  );
}

export default memo(Login);
