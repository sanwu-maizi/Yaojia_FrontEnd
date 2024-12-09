import { memo, useEffect, useState } from "react";
import BasicTable from "../BasicTable";
import { getMedicineList } from "../../api";
import { Medicine } from "../../types";
import { getToken } from "../../utils/store";
import { message } from "antd";

function MedicinesTable() {
  const [data, setData] = useState<Medicine[]>([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(()=> {
    getMedicines();
  }, []);

  const getMedicines = async () => {
    try {
      const { data } = await getMedicineList({
        size: 10,
        offset: 0,
        token: getToken() || "",
       });
      const { code, message } = data.res;
      if (code === 200) {
        setData(data.res.data.medicineList)
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
      title: "药品ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "药品名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "药品数目",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "药品功能",
      dataIndex: "medicinefunction",
      key: "medicineFunction",
    },
    {
      title: "价格",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "药品部",
      dataIndex: "department",
      key: "department",
    },
  ];
  return (
    <>
      { contextHolder }
      <BasicTable dataSource={data} columns={columns}></BasicTable>
    </>
  );
}

export default memo(MedicinesTable);
