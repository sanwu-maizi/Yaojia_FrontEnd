import {Button,Result} from "antd";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navi = useNavigate();
  const clickHandler = useCallback(()=> {
    navi("/");
  }, [navi]);
  return (
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={clickHandler}>Back Home</Button>}
  />
  );
};

export default NotFound;