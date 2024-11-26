import { Table } from "antd";
import { memo } from "react";

type Props = {
  dataSource: Record<string, any>[];
  columns: Record<string, string>[];
}

function BasicTable({dataSource, columns}: Props) {
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
}

export default memo(BasicTable);