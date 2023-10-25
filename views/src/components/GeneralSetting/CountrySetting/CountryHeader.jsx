import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ModalCountry from "./ModalCountry";
import AddIcon from "@mui/icons-material/Add";
const CountryHeader = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(1);

  return (
    <div className=" pt-2 ">
      <div className="flex justify-start md:justify-end">
        <ul className="flex sm:flex-row flex-col gap-8   min-w-fit bg-white text-black dark:bg-deepBlack dark:text-white px-10  rounded-lg ">
          <Link to="">
            <li
              onClick={() => setSelect(1)}
              className={`hover:bg-redColor ${
                select === 1 ? "bg-redColor text-white" : ""
              } hover:text-white  duration-500 transition rounded px-3 py-3 `}
            >
              <div className="flex gap-1 items-center">
                <LanguageIcon style={{ fontSize: "18px" }} />
                <span className="text-xs">Country</span>
              </div>
            </li>
          </Link>

          <Link to="states">
            <li
              onClick={() => setSelect(3)}
              className={`hover:bg-redColor ${
                select === 3 ? "bg-redColor text-white" : ""
              } hover:text-white duration-500 transition rounded px-3 py-3 `}
            >
              <div className="flex gap-1 items-center">
                <HomeIcon style={{ fontSize: "18px" }} />
                <span className="text-xs">States</span>
              </div>
            </li>
          </Link>

          <Link to="cities">
            <li
              onClick={() => setSelect(2)}
              className={`hover:bg-redColor ${
                select === 2 ? "bg-redColor text-white" : ""
              } hover:text-white duration-500 transition rounded px-3 py-3 `}
            >
              <div className="flex gap-1 items-center">
                <LocationCityIcon style={{ fontSize: "18px" }} />
                <span className="text-xs">Cities</span>
              </div>
            </li>
          </Link>

          <Link to="neighbourhood">
            <li
              onClick={() => setSelect(4)}
              className={`hover:bg-redColor ${
                select === 4 ? "bg-redColor text-white" : ""
              } hover:text-white duration-500 transition rounded px-3 py-3 `}
            >
              <div className="flex gap-1 items-center"></div>
              <GroupIcon style={{ fontSize: "20px" }} />
              <span className="text-sm">Neighbourhoods</span>
            </li>
          </Link>
        </ul>
      </div>

      <div>
        <div className=" flex justify-end px-8 my-6">
          <button
            onClick={() => setOpen(true)}
            className="text-white flex gap-1 items-center bg-redColor px-4 py-2 rounded-md hover:text-gray-400 "
          >
            <span>Add New Country</span>
            <span>
              <AddIcon />{" "}
            </span>
          </button>
        </div>
        <ModalCountry open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default CountryHeader;
