import React from "react";
import AdminNav from "./component/admin/AdminNav";
import { Routes, Route} from "react-router-dom";
import Loginn from "./component/Loginn";

import AdminDashboard from "./component/admin/admin-dash/AdminDashboard";
import EmployeeReg from "./component/common/Employee-management/EmployeeReg";
import EmployeerReg from "./component/common/Employeer-Management/EmployeerReg";

function App() {
  return (
    <div className="App">
      <AdminNav/>
            <Routes>
              <Route path="/" element={<AdminDashboard/>}/>
              <Route path="/EmployeeReg" element={<EmployeeReg/>}/>
              <Route path="/EmployeerReg" element={<EmployeerReg/>}/>
            </Routes>
      <Loginn />

    </div>
  );
}

export default App;
