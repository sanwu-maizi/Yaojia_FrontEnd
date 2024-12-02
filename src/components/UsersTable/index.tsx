import { memo, useEffect, useState } from "react";
import BasicTable from "../BasicTable";
import { getUserList } from "../../api";
import { User } from "../../types";

function UsersTable() {
  // TODO
  const [data, setData] = useState<User[]>([]);

  useEffect(()=> {
    getUsers();
  }, []);
  
  const getUsers= async () => {
    const res = await getUserList() ;
    setData(res);
  };
  // TODO
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
      <BasicTable dataSource={data} columns={columns}></BasicTable>
    </>
  );
}

export default memo(UsersTable);