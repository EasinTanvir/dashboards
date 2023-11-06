import React, { useEffect, useState } from "react";
import Headers from "./Headers";
import ReorderIcon from "@mui/icons-material/Reorder";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link, Outlet } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import PersonIcon from "@mui/icons-material/Person";
import AddCardIcon from "@mui/icons-material/AddCard";
import ArticleIcon from "@mui/icons-material/Article";
import TaskIcon from "@mui/icons-material/Task";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import WebIcon from "@mui/icons-material/Web";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import EmailIcon from "@mui/icons-material/Email";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FlagIcon from "@mui/icons-material/Flag";

const DashBoard = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 600);
  console.log(isScreenSmall);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 600);
    };

    if (isScreenSmall) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isScreenSmall]);

  return (
    <div className="relative">
      <Headers setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

      <div className="flex ">
        <div
          className={`dashboard-sidebar-left ${
            sidebarOpen ? "active" : ""
          } dark:bg-headerBg bg-white   fixed top-0 z-10 h-screen overflow-auto `}
        >
          <div
            className={`py-4 flex flex-col ${
              sidebarOpen ? "gap-0" : "gap-1"
            } px-2 `}
          >
            <div className="flex items-center ps-3  gap-4 ">
              <div>
                <img
                  className="object-cover w-8"
                  src="/assets/admin.png"
                  alt=""
                />
              </div>

              <div className={`${!sidebarOpen ? "hidden" : ""}`}>
                <h3 className="dark:text-white text-black font-bold text-md ">
                  MEGA
                </h3>
              </div>
            </div>
            {sidebarOpen ? (
              <div className="text-end  w-full">
                <button onClick={() => setSidebarOpen(false)}>
                  <span className="text-black dark:text-white sidebartext">
                    Close
                  </span>{" "}
                  <KeyboardBackspaceIcon className="text-black dark:text-white" />
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="flex flex-col gap-1"
                >
                  <span className="text-sm text-black dark:text-white sidebartext ms-1">
                    Expand
                  </span>
                  <ArrowRightAltIcon className="text-black dark:text-white ms-1 -mt-1" />
                </button>
              </div>
            )}
            <Link
              onClick={isScreenSmall && (() => setSidebarOpen(false))}
              to="/"
              className="  px-4 py-2  rounded-md"
            >
              <div className="flex items-center gap-2 ">
                <button onClick={() => setSidebarOpen(true)}>
                  <DashboardIcon
                    style={{ fontSize: "18px" }}
                    className="text-black dark:text-white  "
                  />
                </button>
                {sidebarOpen && (
                  <span className="text-black dark:text-white font-semibold sidebartext  mt-1 ">
                    Dashboard
                  </span>
                )}
              </div>
            </Link>
            <div className="ps-4   -mt-2 ">
              {!sidebarOpen && (
                <div
                  onClick={() => setSidebarOpen(true)}
                  className="mt-2 cursor-pointer  "
                >
                  <AdminPanelSettingsIcon
                    style={{ fontSize: "25px" }}
                    className="text-black dark:text-white "
                  />
                </div>
              )}

              {sidebarOpen && (
                <div className="  -ms-4 ">
                  <Accordion
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      color: "white",
                    }}
                  >
                    <AccordionSummary
                      style={{ paddingLeft: "16px", paddingRight: "0px" }}
                      expandIcon={
                        <ExpandMoreIcon
                          className={`
                            
                            text-black   dark:text-white`}
                        />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="flex   items-center font-semibold sidebartext text-black dark:text-white ">
                        <AdminPanelSettingsIcon
                          style={{ fontSize: "20px" }}
                          className="text-black dark:text-white  me-2 "
                        />
                        Admin User
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="bg-lightMode w-fit  dark:bg-deepBlack   flex  mb-2 ms-10 me-2 -mt-4 rounded-md">
                      <ul className="flex flex-col gap-3 text-black dark:text-white">
                        <li
                          onClick={
                            isScreenSmall && (() => setSidebarOpen(false))
                          }
                          className="dark:hover:bg-gray-500  sidebartext hover:bg-gray-300 -ms-3 rounded py-1 flex items-center gap-2"
                        >
                          <PersonAddIcon style={{ fontSize: "18px" }} />
                          <Link to="/new-admin">New Admin</Link>
                        </li>
                        <li
                          onClick={
                            isScreenSmall && (() => setSidebarOpen(false))
                          }
                          className="dark:hover:bg-gray-500 sidebartext hover:bg-gray-300 -ms-3 rounded py-1 flex items-center gap-2"
                        >
                          <SupervisorAccountIcon style={{ fontSize: "20px" }} />
                          <Link to="/admin">Admin</Link>
                        </li>
                        <li
                          onClick={
                            isScreenSmall && (() => setSidebarOpen(false))
                          }
                          className="dark:hover:bg-gray-500 sidebartext hover:bg-gray-300 -ms-3 rounded py-1 flex items-center gap-2"
                        >
                          <AddModeratorIcon style={{ fontSize: "18px" }} />
                          <Link to="/admin-role">Admin Role</Link>
                        </li>
                        <li
                          onClick={
                            isScreenSmall && (() => setSidebarOpen(false))
                          }
                          className="dark:hover:bg-gray-500 sidebartext hover:bg-gray-300 -ms-3 rounded py-1 flex items-center gap-2"
                        >
                          <PersonAddIcon style={{ fontSize: "18px" }} />
                          <Link to="/co-admin">Co Admin</Link>
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
            </div>
            <div className="ps-4   -mt-2 ">
              {!sidebarOpen && (
                <div
                  onClick={() => setSidebarOpen(true)}
                  className="mt-2 cursor-pointer  "
                >
                  <SupervisorAccountIcon
                    style={{ fontSize: "22px" }}
                    className="text-black dark:text-white"
                  />
                </div>
              )}

              {sidebarOpen && (
                <div className=" -ms-4">
                  <Accordion
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      color: "white",
                    }}
                  >
                    <AccordionSummary
                      style={{ paddingLeft: "16px", paddingRight: "0px" }}
                      expandIcon={
                        <ExpandMoreIcon
                          className={`
                              text-black dark:text-white`}
                        />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="flex items-center font-semibold sidebartext text-black dark:text-white ">
                        <PersonIcon
                          style={{ fontSize: "20px" }}
                          className="text-black dark:text-white  me-2 "
                        />
                        Website User
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="bg-lightMode w-fit dark:bg-deepBlack  me-2 flex   mb-2 ms-10 -mt-4 rounded-md">
                      <ul className="flex flex-col gap-3 text-black dark:text-white">
                        <li
                          onClick={
                            isScreenSmall && (() => setSidebarOpen(false))
                          }
                          className="dark:hover:bg-gray-500  sidebartext hover:bg-gray-300 -ms-3 rounded py-1 flex items-center gap-2"
                        >
                          <PersonAddIcon style={{ fontSize: "18px" }} />
                          <Link to="/user">All User</Link>
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
            </div>
            <Link
              onClick={isScreenSmall && (() => setSidebarOpen(false))}
              to="/advertisement"
              className=" px-4 py-2  rounded-md -mt-3 "
            >
              <div className="flex items-center gap-2 ">
                <button onClick={() => setSidebarOpen(true)}>
                  <AddCardIcon
                    style={{ fontSize: "20px" }}
                    className="text-black dark:text-white "
                  />
                </button>
                {sidebarOpen && (
                  <span
                    className={` text-black  dark:text-white font-semibold sidebartext mt-1    `}
                  >
                    Advertisement Managment
                  </span>
                )}
              </div>
            </Link>{" "}
            <Link
              onClick={isScreenSmall && (() => setSidebarOpen(false))}
              to="/form-management"
              className=" px-4 py-2  rounded-md -mt-2"
            >
              <div className="flex items-center gap-2 ">
                <button onClick={() => setSidebarOpen(true)}>
                  <DynamicFormIcon
                    style={{ fontSize: "22px" }}
                    className="text-black dark:text-white "
                  />
                </button>
                {sidebarOpen && (
                  <span className="text-black dark:text-white font-semibold sidebartext  ">
                    Form management
                  </span>
                )}
              </div>
            </Link>
            <div className="ps-4   -mt-2 ">
              {!sidebarOpen && (
                <div
                  onClick={() => setSidebarOpen(true)}
                  className="mt-2 cursor-pointer  "
                >
                  <ArticleIcon
                    style={{ fontSize: "22px" }}
                    className="text-black dark:text-white"
                  />
                </div>
              )}

              {sidebarOpen && (
                <div className=" -ms-4">
                  <Accordion
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      color: "white",
                    }}
                  >
                    <AccordionSummary
                      style={{ paddingLeft: "16px", paddingRight: "0px" }}
                      expandIcon={
                        <ExpandMoreIcon
                          className={` text-black dark:text-white`}
                        />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="flex items-center font-semibold sidebartext text-black dark:text-white ">
                        <ArticleIcon
                          style={{ fontSize: "22px" }}
                          className="text-black dark:text-white me-1"
                        />
                        Page Setting
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="bg-lightMode me-2 w-fit dark:bg-deepBlack  flex   mb-2 ms-9 -mt-3 rounded-md">
                      <ul className="flex flex-col gap-3 text-black dark:text-white">
                        <li
                          onClick={
                            isScreenSmall && (() => setSidebarOpen(false))
                          }
                          className="dark:hover:bg-gray-500  sidebartext hover:bg-gray-300 -ms-3 rounded py-1 flex items-center gap-2"
                        >
                          <ArticleIcon
                            style={{ fontSize: "22px" }}
                            className="text-black dark:text-white"
                          />
                          <Link to="/new-admin"> Page Setting</Link>
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
            </div>
            <div className="ps-4   -mt-2 ">
              {!sidebarOpen && (
                <div
                  onClick={() => setSidebarOpen(true)}
                  className="mt-2 cursor-pointer  "
                >
                  <SettingsIcon
                    style={{ fontSize: "22px" }}
                    className="text-black dark:text-white"
                  />
                </div>
              )}

              {sidebarOpen && (
                <div className=" -ms-4">
                  <Accordion
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      color: "white",
                    }}
                  >
                    <AccordionSummary
                      style={{ paddingLeft: "16px", paddingRight: "0px" }}
                      expandIcon={
                        <ExpandMoreIcon
                          className={` text-black dark:text-white`}
                        />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="flex items-center font-semibold sidebartext text-black dark:text-white ">
                        <SettingsIcon
                          style={{ fontSize: "22px" }}
                          className="text-black dark:text-white me-1"
                        />
                        General Setting
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="bg-lightMode w-fit me-2 dark:bg-deepBlack  flex   mb-2 ms-9 -mt-4 rounded-md">
                      <ul className="flex flex-col gap-3 text-black dark:text-white">
                        <li
                          onClick={
                            isScreenSmall && (() => setSidebarOpen(false))
                          }
                          className="dark:hover:bg-gray-500 sidebartext hover:bg-gray-300 -ms-3 rounded py-1 flex items-center text-sm gap-2"
                        >
                          <LanguageIcon style={{ fontSize: "18px" }} />
                          <Link to="/site-setting">Site Setting</Link>
                        </li>{" "}
                        <li
                          onClick={
                            isScreenSmall && (() => setSidebarOpen(false))
                          }
                          className="dark:hover:bg-gray-500 sidebartext hover:bg-gray-300 -ms-3 rounded py-1 flex items-center gap-2 text-sm"
                        >
                          <WebIcon style={{ fontSize: "18px" }} />
                          <Link to="/thirdparty-setting">Third Party</Link>
                        </li>{" "}
                        <li
                          onClick={
                            isScreenSmall && (() => setSidebarOpen(false))
                          }
                          className="dark:hover:bg-gray-500 sidebartext hover:bg-gray-300 -ms-3 rounded py-1 flex items-center gap-2 text-sm"
                        >
                          <DonutSmallIcon style={{ fontSize: "18px" }} />
                          <Link to="/smtp-setting">SMTP Setting</Link>
                        </li>
                        <li
                          onClick={
                            isScreenSmall && (() => setSidebarOpen(false))
                          }
                          className="dark:hover:bg-gray-500 sidebartext hover:bg-gray-300 -ms-3 rounded py-1 flex items-center gap-2 text-sm"
                        >
                          <EmailIcon style={{ fontSize: "18px" }} />
                          <Link to="/email-setting">Email Setting</Link>
                        </li>
                        <li
                          onClick={
                            isScreenSmall && (() => setSidebarOpen(false))
                          }
                          className="dark:hover:bg-gray-500 sidebartext hover:bg-gray-300 -ms-3 rounded py-1 flex items-center gap-2 text-sm"
                        >
                          <EmailIcon style={{ fontSize: "18px" }} />
                          <Link to="/email-template">Email Templates</Link>
                        </li>
                        <li
                          onClick={
                            isScreenSmall && (() => setSidebarOpen(false))
                          }
                          className="dark:hover:bg-gray-500 sidebartext hover:bg-gray-300 -ms-3 rounded py-1 flex items-center gap-2 text-sm"
                        >
                          <FlagIcon style={{ fontSize: "18px" }} />
                          <Link to="/country-setting">Country Setting</Link>
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={`dashboard-sidebar-right ${
            sidebarOpen ? "active" : ""
          } w-full bg-lightMode  dark:bg-deepBlack sm:px-2 px-0 py-2`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
