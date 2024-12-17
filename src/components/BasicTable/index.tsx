import { Table } from "antd";
import { memo } from "react";

type Props<T> = {
  dataSource: T[];
  columns: Record<string, string>[];
  pagination: {
    current: number;
    pageSize: number;
  }
  onChange: (params: any) => any;
}

function BasicTable<T>({dataSource, columns, pagination, onChange}: Props<T>) {
  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={pagination} onChange={onChange}/>;
    </>
  );
}

export default memo(BasicTable);