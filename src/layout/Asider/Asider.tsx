import { memo } from "react";
import "./index.css";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import MenuComponent from "../../components/MenuComponent";
import { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function Asider() {
  
  const items: MenuItem[] = [
    {
      key: "orders",
      label: "全部订单",
      icon: <MailOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "medicines",
      label: "全部药品",
      icon: <AppstoreOutlined />,
    },
    {
      type: "divider",
    },
    {
      key: "users",
      label: "全部用户",
      icon: <SettingOutlined />,
    },
  ];
  const navi = useNavigate();
  const onClick = (e: any) => {
    navi(e.key);
  };

  return (
    <>
    <div className="asiderWrapper">
      <MenuComponent
        items={items}
        clickHandler={onClick}
        style={{ width: "100%", height: "100%"}}
        defaultSelectedKeys={["orders"]}
        defaultOpenKeys={["orders"]}
      />
    </div>  
    </>
  );
}
export default memo(Asider);