import { memo, useEffect, useState } from "react";
import BasicTable from "../BasicTable";
import { getMedicineList } from "../../api";
import { Medicine } from "../../types";
import { getToken } from "../../utils/store";
import { message } from "antd";

function MedicinesTable() {
  const [data, setData] = useState<Medicine[]>([]);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 1000,
    },
  });
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(()=> {
    getMedicines();
  }, []);

  useEffect(()=>{
    getMedicines();
  }, [
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
  ]);

  const getMedicines = async () => {
    try {
      const { data } = await getMedicineList({
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
      title: "药品ID",
      dataIndex: "medicineId",
      key: "id",
    },
    {
      title: "药品名",
      dataIndex: "medicineName",
      key: "name",
    },
    {
      title: "药品数目",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "药品功能",
      dataIndex: "medicineFunction",
      key: "medicineFunction",
    },
    {
      title: "价格",
      dataIndex: "medicinePrice",
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
      <BasicTable dataSource={data} columns={columns} pagination={tableParams.pagination} onChange={handleTableChange}></BasicTable>
    </>
  );
}

export default memo(MedicinesTable);
