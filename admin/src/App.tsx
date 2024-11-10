import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddService from "./pages/AddService";
import AddEmployee from "./pages/AddEmployee";
import Orders from "./pages/Orders";
import EmployeeLogin from "./pages/EmployeeLogin";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Great Salon - Admin</h1>
        <Routes>
          <Route path="/add-service" element={<AddService />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/employee-login" element={<EmployeeLogin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
