import React from "react";
import "./index.css";

import { UserOutlined,GithubOutlined,MailOutlined } from "@ant-design/icons";
import { Avatar  ,Space} from "antd";
const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        
        <GithubOutlined onClick={toGithub}/>
        <MailOutlined width={"100px"} />
        <GithubOutlined onClick={toGithub}/>
        <MailOutlined width={"100px"} />
      </nav>
      <Space direction="vertical" size={16}>
        <Avatar size={36} icon={<UserOutlined />} />
      </Space>
    </header>
  );
};

function toGithub(){
  window.location.href = "https://github.com";
}


export default Header;