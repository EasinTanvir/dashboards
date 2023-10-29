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
    <div className=" my-1 lg:max-w-[68%] w-full font-myfont ">
      <div className="flex sm:justify-start ">
        <ul className="flex  w-full lg:justify-between justify-start  flex-wrap lg:gap-2 gap-0    bg-white text-black dark:bg-deepBlack dark:text-white  rounded-lg ">
          <Link to="">
            <li
              onClick={() => setSelect(1)}
              className={` ${
                select === 1 ? "bg-redColor text-white" : ""
              }  duration-100 transition rounded lg:px-8 border px-3 py-3 `}
            >
              <div className="flex gap-1 items-center ">
                <LanguageIcon style={{ fontSize: "18px" }} />
                <span className="md:text-sm text-customSize font-semibold">
                  Country
                </span>
              </div>
            </li>
          </Link>

          <Link to="states">
            <li
              onClick={() => setSelect(3)}
              className={` ${
                select === 3 ? "bg-redColor text-white" : ""
              }  duration-100 transition rounded lg:px-8 px-3 py-3 `}
            >
              <div className="flex gap-1 items-center">
                <HomeIcon style={{ fontSize: "18px" }} />
                <span className="md:text-sm text-customSize font-semibold">
                  States
                </span>
              </div>
            </li>
          </Link>

          <Link to="cities">
            <li
              onClick={() => setSelect(2)}
              className={` ${
                select === 2 ? "bg-redColor text-white" : ""
              }  duration-100 transition rounded lg:px-8 px-3 py-3 `}
            >
              <div className="flex gap-1 items-center">
                <LocationCityIcon style={{ fontSize: "18px" }} />
                <span className="md:text-sm text-customSize font-semibold">
                  Cities
                </span>
              </div>
            </li>
          </Link>

          <Link to="neighbourhood">
            <li
              onClick={() => setSelect(4)}
              className={` ${
                select === 4 ? "bg-redColor text-white" : ""
              }  duration-100 transition rounded lg:px-8 px-3 py-2 `}
            >
              <div className="flex gap-1 items-center"></div>
              <GroupIcon style={{ fontSize: "18px" }} />
              <span className="md:text-sm text-customSize font-semibold ms-1">
                Neighbourhoods
              </span>
            </li>
          </Link>
        </ul>
      </div>

      {/* <div>
        <div className="  my-6">
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
      </div> */}
    </div>
  );
};

export default CountryHeader;
