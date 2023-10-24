import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";

const CountryHeader = () => {
  const [select, setSelect] = useState(1);

  return (
    <div className=" pt-2 flex justify-end">
      <ul className="flex gap-8  border  min-w-fit bg-white text-black px-10 py-4 rounded-lg ">
        <li
          onClick={() => setSelect(1)}
          className={`hover:bg-redColor ${
            select === 1 ? "bg-redColor text-white" : ""
          } hover:text-white duration-500 transition rounded px-3 py-3 `}
        >
          <Link to="" className="flex gap-1 items-center">
            <LanguageIcon style={{ fontSize: "20px" }} />
            <span className="text-sm">Country</span>
          </Link>
        </li>
        <li
          onClick={() => setSelect(2)}
          className={`hover:bg-redColor ${
            select === 2 ? "bg-redColor text-white" : ""
          } hover:text-white duration-500 transition rounded px-3 py-3 `}
        >
          <Link to="cities" className="flex gap-1 items-center">
            <LocationCityIcon style={{ fontSize: "20px" }} />
            <span className="text-sm">Cities</span>
          </Link>
        </li>
        <li
          onClick={() => setSelect(3)}
          className={`hover:bg-redColor ${
            select === 3 ? "bg-redColor text-white" : ""
          } hover:text-white duration-500 transition rounded px-3 py-3 `}
        >
          <Link to="states" className="flex gap-1 items-center">
            <HomeIcon style={{ fontSize: "20px" }} />
            <span className="text-sm">States</span>
          </Link>
        </li>
        <li
          onClick={() => setSelect(4)}
          className={`hover:bg-redColor ${
            select === 4 ? "bg-redColor text-white" : ""
          } hover:text-white duration-500 transition rounded px-3 py-3 `}
        >
          <Link to="neighbourhood" className="flex gap-1 items-center">
            <GroupIcon style={{ fontSize: "20px" }} />
            <span className="text-sm">Neighbourhoods</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CountryHeader;
