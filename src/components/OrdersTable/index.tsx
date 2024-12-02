import { memo, useEffect, useState } from "react";
import { getOrderList } from "../../api";
import BasicTable from "../BasicTable";
import { Order } from "../../types";

function OrdersTable() {
  // TODO

  const [data, setData] = useState<Order[]>([]);

  useEffect(()=> {
    getOrders();
  }, []);
  
  const getOrders= async () => {
    const res = await getOrderList();
    setData(res);
  };
  // TODO
  const columns = [
    {
      title: "订单ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "病人名",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "药品列表",
      dataIndex: "medicineList",
      key: "medicineList",
    },
    {
      title: "订单状态",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "病情信息",
      dataIndex: "diseaseInfo",
      key: "diseaseInfo",
    },
  ];
  return (
    <>
      <BasicTable dataSource={data} columns={columns}></BasicTable>
    </>
  );
}

export default memo(OrdersTable);