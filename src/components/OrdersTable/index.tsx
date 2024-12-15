import { memo, useEffect, useState } from "react";
import { getOrderList } from "../../api";
import BasicTable from "../BasicTable";
import { Order } from "../../types";
import { getToken } from "../../utils/store";
import { message } from "antd";

function OrdersTable() {
  const [data, setData] = useState<Order[]>([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(()=> {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const { data } = await getOrderList({
        size: 10,
        offset: 1,
        token: getToken() || "",
       });
      const { code, message } = data;
      if (code === 200 || Number(code) === 200) {
        setData(data.data.orders)
      } else {
        throw new Error("获取异常");
      }
    } catch {
      messageApi.error("获取异常");
    }
  };
  
  const columns = [
    {
      title: "订单ID",
      dataIndex: "orderId",
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
      { contextHolder }
      <BasicTable dataSource={data} columns={columns}></BasicTable>
    </>
  );
}

export default memo(OrdersTable);