import { memo, Suspense } from "react";
import "./index.css";
import { Outlet } from "react-router-dom";
import Loading from "../../components/Loading";
function Main() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default memo(Main);