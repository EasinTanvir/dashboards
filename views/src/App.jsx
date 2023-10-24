import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import HomePage from "./components/HomePage/HomePage";
import NewAdmin from "./components/AdminUser/NewAdmin";
import Admin from "./components/AdminUser/Admin";
import AdminRole from "./components/AdminUser/AdminRole";

import Advertisement from "./components/Advertisement/Advertisement";
import FormManageMent from "./components/FormManageMent/FormManageMent";
import SiteSetting from "./components/GeneralSetting/SiteSetting";
import ThirdPartySetting from "./components/GeneralSetting/ThirdPartySetting";
import SmtpSetting from "./components/GeneralSetting/SmtpSetting";
import EmailSetting from "./components/GeneralSetting/EmailSetting";
import CountrySetting from "./components/GeneralSetting/CountrySetting/CountrySetting";
import CoAdmin from "./components/AdminUser/CoAdmin";
import AllUsers from "./components/WebsiteUser/AllUsers";
import PageSetting from "./components/PageSetting/PageSetting";

import CountryCity from "./components/GeneralSetting/CountrySetting/CountryCity";
import AllCountries from "./components/GeneralSetting/CountrySetting/AllCountries";
import CountryState from "./components/GeneralSetting/CountrySetting/CountryState";
import Neighbourhood from "./components/GeneralSetting/CountrySetting/Neighbourhood";
import MainCountry from "./components/GeneralSetting/CountrySetting/MainCountry";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />}>
          <Route path="" element={<HomePage />} />
          <Route path="/new-admin" element={<NewAdmin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-role" element={<AdminRole />} />
          <Route path="/co-admin" element={<CoAdmin />} />
          <Route path="/user" element={<AllUsers />} />
          <Route path="/advertisement" element={<Advertisement />} />
          <Route path="/form-management" element={<FormManageMent />} />
          <Route path="/page-setting" element={<PageSetting />} />
          <Route path="/site-setting" element={<SiteSetting />} />
          <Route path="/thirdparty-setting" element={<ThirdPartySetting />} />
          <Route path="/smtp-setting" element={<SmtpSetting />} />
          <Route path="/email-setting" element={<EmailSetting />} />
          <Route path="/country-setting" element={<CountrySetting />}>
            <Route path="" element={<AllCountries />} />
            <Route path="cities" element={<CountryCity />} />
            <Route path="states" element={<CountryState />} />
            <Route path="neighbourhood" element={<Neighbourhood />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
