import React, { useState } from "react";

import CountryHeader from "./CountryHeader";
import { Outlet } from "react-router-dom";
import ModalCountry from "./ModalCountry";
import AddIcon from "@mui/icons-material/Add";
import AddNewCountry from "./AddNewCountry";
import ActiveCountry from "./ActiveCountry";
const CountrySetting = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="px-2">
        <div className="flex flex-wrap gap-2 ">
          <ActiveCountry title="Country" />
          <ActiveCountry title="State" />
          <ActiveCountry title="City" />
          <ActiveCountry title="neighbourhood" />
        </div>
        {/* country header */}

        <CountryHeader />
        {/* country header */}
        {/* contry content */}
        <div>
          <Outlet />
        </div>

        {/* contry content */}
      </div>
    </div>
  );
};

export default CountrySetting;
