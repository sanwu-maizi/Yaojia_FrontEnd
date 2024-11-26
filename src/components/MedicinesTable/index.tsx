import { memo } from "react";
import BasicTable from "../BasicTable";
import { getMedicineList } from "../../api";

function MedicinesTable() {
  // TODO 确认传递参数
  const dataSource = getMedicineList();
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

export default memo(MedicinesTable);
