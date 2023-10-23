import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import HomePage from "./components/HomePage/HomePage";
import Test from "./components/Test";
import NewAdmin from "./components/NewAdmin/NewAdmin";
import Admin from "./components/Admin/Admin";
import AdminRole from "./components/AdminRole/AdminRole";
import Users from "./components/Users/Users";
import Advertisement from "./components/Advertisement/Advertisement";
import FormManageMent from "./components/FormManageMent/FormManageMent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />}>
          <Route path="" element={<HomePage />} />
          <Route path="/new-admin" element={<NewAdmin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-role" element={<AdminRole />} />
          <Route path="/co-admin" element={<Test />} />
          <Route path="/user" element={<Users />} />
          <Route path="/advertisement" element={<Advertisement />} />
          <Route path="/form-management" element={<FormManageMent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
