import { memo } from "react";
import BasicTable from "../BasicTable";
import { getUserList } from "../../api";

function UsersTable() {
  // TODO
  const dataSource = getUserList();
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
      title: "",
      dataIndex: "",
      key: "",
    },
    {
      title: "",
      dataIndex: "",
      key: "",
    },
    {
      title: "",
      dataIndex: "",
      key: "",
    },
    {
      title: "",
      dataIndex: "",
      key: "",
    },
    {
      title: "",
      dataIndex: "",
      key: "",
    },
  ];
  return (
    <>
      <BasicTable dataSource={dataSource} columns={columns}></BasicTable>
    </>
  );
}

export default memo(UsersTable);