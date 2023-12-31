import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ClearIcon from "@mui/icons-material/Clear";
import { themContext } from "../../context/themeContext";

const Headers = ({ setSidebarOpen, sidebarOpen }) => {
  const { dark, setDark } = themContext();

  const onDarkHandler = () => {
    // document.body.classList.toggle("dark");
    //setDark(!dark);
  };

  return (
    <>
      <header className="h-12  flex items-center sticky top-0 z-10 headers dark:bg-headerBg bg-white">
        <div className="container flex  justify-start sm:justify-end  mx-auto   ">
          <div className="mx-4 flex gap-4  items-center">
            <div className="mobile-icon ms-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? (
                  <ClearIcon className="text-4xl text-black dark:text-white cursor-pointer" />
                ) : (
                  <ReorderIcon className="text-4xl text-black dark:text-white cursor-pointer" />
                )}
              </button>
            </div>
          </div>
          <div className="right">
            <div className="flex gap-4 items-center">
              <div>
                <img
                  className="rounded-full w-6 ring-1 ring-green-800"
                  src="/assets/logo.png"
                  alt=""
                />
              </div>
              <div onClick={onDarkHandler}>
                {dark ? (
                  <LightModeIcon
                    style={{ fontSize: "22px" }}
                    className=" text-white cursor-pointer"
                  />
                ) : (
                  <DarkModeIcon
                    style={{ fontSize: "22px" }}
                    className=" text-black cursor-pointer"
                  />
                )}
              </div>{" "}
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headers;
