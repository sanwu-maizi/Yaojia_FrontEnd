import { memo, useEffect, useState } from "react";
import BasicTable from "../BasicTable";
import { getUserList } from "../../api";
import { User } from "../../types";
import { getToken } from "../../utils/store";
import { message } from "antd";

function UsersTable() {
  const [messageApi, contextHolder] = message.useMessage();
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 1000,
    },
  });
  const [data, setData] = useState<User[]>([]);

  useEffect(()=> {
    getUsers();
  }, []);

  useEffect(()=>{
    getUsers();
  }, [
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
  ]);

  const getUsers = async () => {
    try {
      const { data } = await getUserList({
        size: tableParams.pagination?.pageSize,
        offset: tableParams.pagination?.current,
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


  const handleTableChange = (pagination: any) => {
    setTableParams({
      pagination,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
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
      <BasicTable dataSource={data} columns={columns} pagination={tableParams.pagination} onChange={handleTableChange}></BasicTable>
    </>
  );
}

export default memo(UsersTable);