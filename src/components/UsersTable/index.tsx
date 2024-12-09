import { memo, useEffect, useState } from "react";
import BasicTable from "../BasicTable";
import { getUserList } from "../../api";
import { User } from "../../types";
import { getToken } from "../../utils/store";
import { message } from "antd";

function UsersTable() {
  const [messageApi, contextHolder] = message.useMessage();
  const [data, setData] = useState<User[]>([]);

  useEffect(()=> {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const { data } = await getUserList({
        size: 10,
        offset: 0,
        token: getToken() || "",
       });
      const { code, message } = data.res;
      if (code === 200) {
        setData(data.res.data.userList)
      } else {
        messageApi.error(message);
        throw new Error("Error: " + message);
      }
    } catch {
      messageApi.error("获取异常");
      throw new Error("获取异常");
    }
  };
  
  const columns = [
    {
      title: "用户ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "用户名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "用户邮箱",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "用户状态",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "权限",
      dataIndex: "permission",
      key: "permission",
    },
    {
      title: "用户创建时间",
      dataIndex: "createTime",
      key: "createTime",
    },
  ];
  return (
    <>
      { contextHolder }
      <BasicTable dataSource={data} columns={columns}></BasicTable>
    </>
  );
}

export default memo(UsersTable);