import { Table } from "antd";
import { memo } from "react";

type Props<T> = {
  dataSource: T[];
  columns: Record<string, string>[];
}

function BasicTable<T>({dataSource, columns}: Props<T>) {
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
}

export default memo(BasicTable);