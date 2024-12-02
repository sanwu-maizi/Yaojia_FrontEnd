import { memo, useEffect, useState } from "react";
import BasicTable from "../BasicTable";
import { getMedicineList } from "../../api";
import { Medicine } from "../../types";

function MedicinesTable() {
  // TODO 确认传递参数
  const [data, setData] = useState<Medicine[]>([]);

  useEffect(()=> {
    getMedicines();
  }, []);
  
  const getMedicines= async () => {
    const res = await getMedicineList();
    setData(res);
  };

  // TODO 确认列名
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
      <BasicTable dataSource={data} columns={columns}></BasicTable>
    </>
  );
}

export default memo(MedicinesTable);
