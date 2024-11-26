import { memo } from "react";
import { getOrderList } from "../../api";
import BasicTable from "../BasicTable";

function OrdersTable() {
  // TODO
  const dataSource = getOrderList();
  // TODO
  const columns = [
    {
      title: "订单ID",
      dataIndex: "id",
      key: "id",
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

export default memo(OrdersTable);