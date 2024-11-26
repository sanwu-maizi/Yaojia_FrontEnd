import { memo } from "react";
import "./index.css";
import MedicinesTable from "../../../components/MedicinesTable";
function MedicinesPage() {
  return (
    <div>
      <MedicinesTable>
        
      </MedicinesTable>
    </div>
  );
}

export default memo(MedicinesPage);