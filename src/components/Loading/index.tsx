import { Spin } from "antd";
import { memo } from "react";
import "./index.css";
function Loading()  {
  return (
    <div className="loadingWrapper">
        <Spin size="large" />
    </div>
  );
}

export default memo(Loading);