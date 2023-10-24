import React from "react";

import CountryHeader from "./CountryHeader";
import { Outlet } from "react-router-dom";
const CountrySetting = () => {
  return (
    <div>
      <div className="px-2">
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
