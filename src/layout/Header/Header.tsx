import React from "react";
import "./index.css";
import { UserOutlined, GithubOutlined, MailOutlined, BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Space, Popover, Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { GITHUB_WEBSITE, QQ_EMAIL } from "../../constants";
import { jumpToPage } from "../../utils";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const toGithub = () => {
    jumpToPage(GITHUB_WEBSITE);
  };

  const emailUs = () => {
    jumpToPage(QQ_EMAIL);
  };

  const toProfile = () => {
    // TODO 增加profile路由及页面，可以参照其他页面
    navigate("/profile");
  };

  const toSettings = () => {
    // TODO
      navigate("/setting");
  };

  const logout = () => {
      // TODO
      navigate("/");
  };

  const login = () => {
      // TODO
      navigate("/login");
  };

  const popoverContent = (
    <div>
      <p>用户名: 用户名</p>
      <Button type="link" onClick={toProfile}>查看个人资料</Button>
      <Button type="link" onClick={toSettings}>设置</Button>
      <Button type="link" onClick={logout}>登出</Button>
      <Button type="link" onClick={login}>登录</Button>
    </div>
  );

  return (
    <header className="header">
      <div className="logo">Yaojia</div>
      <Input className="search-input" placeholder="搜索" prefix={<SearchOutlined />} />
      <Space direction="horizontal" size={16} className="user-actions">
        <Button type="link" icon={<GithubOutlined />} onClick={toGithub}>GitHub</Button>
        <Button type="link" icon={<MailOutlined />} onClick={emailUs}>联系我们</Button>
        <Button type="link" icon={<BellOutlined />} >通知</Button>
        <Popover content={popoverContent} title="用户信息" trigger="hover">
          <Avatar size={36} icon={<UserOutlined />} />
        </Popover>
      </Space>
    </header>
  );
};

export default Header;