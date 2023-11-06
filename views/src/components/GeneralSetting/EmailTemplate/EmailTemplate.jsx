import React, { useEffect, useRef, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Link, Outlet } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { themContext } from "../../../context/themeContext";

const EmailTemplate = () => {
  const { dark, setDark, isScreenSmall } = themContext();
  const [accordionOne, setAccordionOne] = useState(true);
  const [accordionTwo, setAccordionTwo] = useState(true);

  const selectFile = useRef(null);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setOpen(true);
  };
  const handleClose3 = () => {
    setOpen2(true);
  };

  const rows = [
    {
      id: 1,
      title: "Admin Reset Password",
      action: "Action",
    },
    {
      id: 2,
      title: "User Reset Password",
      action: "Action",
    },
    {
      id: 3,
      title: "User Verify Link Mail",
      action: "Action",
    },
    {
      id: 4,
      title: "User Verify Code Mail",
      action: "Action",
    },
    {
      id: 5,
      title: "Advertisement Creation Mail",
      action: "Action",
    },
    {
      id: 6,
      title: "Advertisement Draft Mail",
      action: "Action",
    },
    {
      id: 7,
      title: "Advertisement Expire Mail",
      action: "Action",
    },
    {
      id: 8,
      title: "Advertisement Delete Mail",
      action: "Action",
    },
  ];
  const columns = [
    {
      field: "title",
      width: 270,
      sortable: false,

      headerAlign: "center",
      // align: "center",
      headerClassName: "border border-black border-t-0 text-center",
      cellClassName:
        "text-black dark:text-white text-center border border-t-0 border-r-0",

      renderHeader: (params) => (
        <b style={{ fontSize: "12px", fontWeight: 900, textAlign: "center" }}>
          Title
        </b>
      ),
    },

    {
      field: "action",
      type: "button",
      headerClassName:
        "border border-black border-r-0 text-center border-t-0 border-l-0 ",
      sortable: false,
      width: 90,
      cellClassName:
        "text-black dark:text-white text-center border border-t-0  border-r-0",
      renderHeader: (params) => (
        <b style={{ fontSize: "12px", fontWeight: 900 }}>Action</b>
      ),
      renderCell: (params) => {
        const handleCellClick = (event) => {
          event.stopPropagation();
        };
        console.log(params.id);
        return (
          <div onClick={handleCellClick}>
            {/* Your cell content */}
            <Link
              to={
                params.id === 1
                  ? "/email-template"
                  : params.id === 2
                  ? "/email-template/user-reset-password"
                  : params.id === 3
                  ? "/email-template/user-verify-link-mail"
                  : params.id === 4
                  ? "/email-template/user-verify-code-mail"
                  : params.id === 5
                  ? "/email-template/advertise-creator-mail"
                  : params.id === 6
                  ? "/email-template/advertise-draft-mail"
                  : params.id === 7
                  ? "/email-template/advertise-expire-mail"
                  : params.id === 8
                  ? "/email-template/advertise-delete-mail"
                  : ""
              }
            >
              <button className="btn bg-redColor px-2 py-1 rounded-md">
                <span>
                  <EditIcon
                    className="text-white"
                    style={{ fontSize: "18px" }}
                  />
                </span>
                <span style={{ fontSize: "12px" }} className="text-white">
                  Action
                </span>
              </button>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col gap-4 w-full ">
      <div className="lg:w-[41%] sm:w-fit w-[100%]">
        <Accordion expanded={accordionOne}>
          <AccordionSummary
            onClick={() => setAccordionOne(!accordionOne)}
            style={{ backgroundColor: "white" }}
            expandIcon={<ExpandMoreIcon className="dark:text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <button className="dark:text-white text-black font-myfont font-bold text-md ">
              Show Contents for Email
            </button>
          </AccordionSummary>
          <AccordionDetails className="dark:bg-gray-700">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
              <DataGrid
                // disableRowSelectionOnClick={true}
                unstable_ignoreValueFormatterDuringExport
                onRowSelectionModelChange={(select) => {
                  console.log(select);
                }}
                style={{
                  color: "black",
                  fontSize: isScreenSmall ? "14px" : "12px",
                }}
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 8 },
                  },
                }}
                className="custom-datagrid"
                pageSizeOptions={[8, 4]}
                checkboxSelection
                rowHeight={35}
                columnHeaderHeight={42}
              />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default EmailTemplate;
