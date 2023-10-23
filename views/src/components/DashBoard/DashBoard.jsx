import React, { useState } from "react";
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
const DashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="relative">
      <Headers setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

      <div className="flex ">
        <div
          className={`dashboard-sidebar-left ${
            sidebarOpen ? "active" : ""
          } dark:bg-headerBg bg-white   fixed top-0 z-10 h-screen overflow-auto `}
        >
          <div className="py-4 flex flex-col px-2 gap-4">
            <div className="flex items-center  gap-4">
              <div>
                <img
                  className="object-cover w-10"
                  src="/assets/admin.png"
                  alt=""
                />
              </div>
              {sidebarOpen && (
                <div>
                  <h3 className="dark:text-white text-black font-bold text-2xl d">
                    MEGA
                  </h3>
                </div>
              )}
            </div>
            {sidebarOpen ? (
              <div className="text-end  w-full px-4">
                <button onClick={() => setSidebarOpen(false)}>
                  <span className="text-black dark:text-white text-sm">
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
                  <span className="font-semibold text-black dark:text-white">
                    Expand
                  </span>
                  <ArrowRightAltIcon className="text-black dark:text-white" />
                </button>
              </div>
            )}
            <Link
              to="/"
              className="hover:bg-gray-300 dark:hover:bg-deepBlack px-4 py-2  rounded-md"
            >
              <div className="flex items-center gap-2 ">
                <button onClick={() => setSidebarOpen(true)}>
                  <DashboardIcon className="text-black dark:text-white " />
                </button>
                {sidebarOpen && (
                  <span className="text-black dark:text-white font-semibold  ">
                    Dashboard
                  </span>
                )}
              </div>
            </Link>
            <div className="px-4   ">
              {!sidebarOpen && (
                <div
                  onClick={() => setSidebarOpen(true)}
                  className="mt-2 cursor-pointer  "
                >
                  <AdminPanelSettingsIcon
                    style={{ fontSize: "30px" }}
                    className="text-black dark:text-white "
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
                      expandIcon={
                        <ExpandMoreIcon className="ms-1 text-black dark:text-white" />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="flex items-center text-black dark:text-white ">
                        <AdminPanelSettingsIcon
                          style={{ fontSize: "30px" }}
                          className="text-black dark:text-white me-2 "
                        />
                        Admin User
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="bg-lightMode dark:bg-deepBlack w-48 flex justify-center">
                      <ul className="flex flex-col gap-3 text-black dark:text-white">
                        <li className="dark:hover:bg-gray-500 hover:bg-gray-300 px-4 rounded py-1 flex items-center gap-2">
                          <PersonAddIcon />
                          <Link to="/new-admin">New Admin</Link>
                        </li>
                        <li className="dark:hover:bg-gray-500 hover:bg-gray-300 px-4 rounded py-1 flex items-center gap-2">
                          <SupervisorAccountIcon />
                          <Link to="/admin">Admin</Link>
                        </li>
                        <li className="dark:hover:bg-gray-500 hover:bg-gray-300 px-4 rounded py-1 flex items-center gap-2">
                          <AddModeratorIcon />
                          <Link to="/admin-role">Admin Role</Link>
                        </li>
                        <li className="dark:hover:bg-gray-500 hover:bg-gray-300 px-4 rounded py-1 flex items-center gap-2">
                          <PersonAddIcon />
                          <Link to="/co-admin">Co Admin</Link>
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
            </div>
            <div className="px-4   ">
              {!sidebarOpen && (
                <div
                  onClick={() => setSidebarOpen(true)}
                  className="mt-2 cursor-pointer "
                >
                  <SupervisorAccountIcon
                    style={{ fontSize: "30px" }}
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
                      expandIcon={
                        <ExpandMoreIcon className="ms-1 text-black dark:text-white" />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="flex items-center text-black dark:text-white ">
                        <SupervisorAccountIcon
                          style={{ fontSize: "30px" }}
                          className="text-black dark:text-white me-2"
                        />
                        Website User
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="bg-lightMode dark:bg-deepBlack w-44 flex justify-center">
                      <ul className="flex flex-col gap-3 text-black dark:text-white">
                        <li className="dark:hover:bg-gray-500 hover:bg-gray-300 py-2  text-sm px-4 rounded  flex items-center gap-2">
                          <PersonIcon />
                          <Link to="/user">All User</Link>
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
            </div>
            <Link
              to="/advertisement"
              className="hover:bg-gray-300 dark:hover:bg-deepBlack px-4 py-2  rounded-md"
            >
              <div className="flex items-center gap-2 ">
                <button onClick={() => setSidebarOpen(true)}>
                  <AddCardIcon className="text-black dark:text-white " />
                </button>
                {sidebarOpen && (
                  <span className="text-black dark:text-white    ">
                    Advertisement Managment
                  </span>
                )}
              </div>
            </Link>{" "}
            <Link
              to="/form-management"
              className="hover:bg-gray-300 dark:hover:bg-deepBlack px-4 py-2  rounded-md"
            >
              <div className="flex items-center gap-2 ">
                <button onClick={() => setSidebarOpen(true)}>
                  <DynamicFormIcon className="text-black dark:text-white " />
                </button>
                {sidebarOpen && (
                  <span className="text-black dark:text-white   ">
                    Form management
                  </span>
                )}
              </div>
            </Link>
            <div className="px-4   ">
              {!sidebarOpen && (
                <div
                  onClick={() => setSidebarOpen(true)}
                  className="mt-2 cursor-pointer "
                >
                  <ArticleIcon
                    style={{ fontSize: "30px" }}
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
                      expandIcon={
                        <ExpandMoreIcon className="ms-1 text-black dark:text-white" />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="flex items-center text-black dark:text-white">
                        <ArticleIcon
                          style={{ fontSize: "30px" }}
                          className="text-black dark:text-white me-2"
                        />
                        Page Setting
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="bg-lightMode dark:bg-deepBlack w-48 flex justify-center">
                      <ul className="flex flex-col gap-3 text-black dark:text-white">
                        <li className="dark:hover:bg-gray-500 hover:bg-gray-300 px-4 rounded py-1 flex items-center gap-2">
                          <TaskIcon />
                          <Link>Test</Link>
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )}
            </div>
            <div className="px-4   ">
              {!sidebarOpen && (
                <div
                  onClick={() => setSidebarOpen(true)}
                  className="mt-2 cursor-pointer "
                >
                  <SettingsIcon
                    style={{ fontSize: "30px" }}
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
                      expandIcon={
                        <ExpandMoreIcon className="ms-1 text-black dark:text-white" />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="flex items-center text-black dark:text-white">
                        <SettingsIcon
                          style={{ fontSize: "30px" }}
                          className="text-black dark:text-white me-2"
                        />
                        Genral Setting
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="bg-lightMode dark:bg-deepBlack w-48 flex justify-center">
                      <ul className="flex flex-col gap-3 text-black dark:text-white">
                        <li className="dark:hover:bg-gray-500 hover:bg-gray-300 px-4 rounded py-1 flex items-center text-sm gap-2">
                          <LanguageIcon />
                          <Link>Site Setting</Link>
                        </li>{" "}
                        <li className="dark:hover:bg-gray-500 hover:bg-gray-300 px-4 rounded py-1 flex items-center gap-2 text-sm">
                          <WebIcon />
                          <Link>Third Party</Link>
                        </li>{" "}
                        <li className="dark:hover:bg-gray-500 hover:bg-gray-300 px-4 rounded py-1 flex items-center gap-2 text-sm">
                          <DonutSmallIcon />
                          <Link>SMTP Setting</Link>
                        </li>
                        <li className="dark:hover:bg-gray-500 hover:bg-gray-300 px-4 rounded py-1 flex items-center gap-2 text-sm">
                          <EmailIcon />
                          <Link>Email Setting</Link>
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
          } w-full bg-lightMode  dark:bg-deepBlack p-2`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
