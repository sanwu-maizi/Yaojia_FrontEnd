import { memo } from "react";
import "./index.css";
import UsersTable from "../../../components/UsersTable";
function UserPage() {
  return (
    <div>
      <UsersTable>
        
      </UsersTable>
    </div>
  );
}

export default memo(UserPage);