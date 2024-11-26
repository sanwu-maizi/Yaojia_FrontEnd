import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

type Props = {
  clickHandler: (e: any)=> void;
  style: Record<string, string>;
  defaultSelectedKeys: string[];
  defaultOpenKeys: string[];
  items: MenuItem[];
}

const MenuComponent= ({clickHandler, style, defaultSelectedKeys, defaultOpenKeys, items}:Props) => {
  return (
    <Menu
      onClick={clickHandler}
      style={style}
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      items={items}
    />
  );
};

export default MenuComponent;