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
        offset: 1,
        token: getToken() || "",
       });
      const { code, message } = data;
      if (code === 200 || Number(code) === 200) {
        setData(data.data)
      } else {
        throw new Error("Error: " + message);
      }
    } catch {
      messageApi.error("Error: " + message);
    }
  };
  
  const columns = [
    {
      title: "用户ID",
      dataIndex: "userId",
      key: "id",
    },
    {
      title: "用户名",
      dataIndex: "userName",
      key: "name",
    },
    {
      title: "用户邮箱",
      dataIndex: "userEmail",
      key: "email",
    },
    {
      title: "用户状态",
      dataIndex: "userStatus",
      key: "status",
    },
    {
      title: "用户创建时间",
      dataIndex: "createdAt",
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