import { memo } from "react";
import "./index.css";
import OrdersTable from "../../../components/OrdersTable";
function OrdersPage() {
  return (
    <div>
      <OrdersTable>
        
      </OrdersTable>
    </div>
  );
}

export default memo(OrdersPage);