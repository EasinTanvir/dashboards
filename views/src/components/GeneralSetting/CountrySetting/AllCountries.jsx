import React, { useRef, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Modal from "@mui/material/Modal";
import ModalCountry from "./ModalCountry";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { themContext } from "../../../context/themeContext";
import EditModalCountry from "./EditModal";
import DeleteModal from "./DeleteModal";

const rows = [
  {
    id: 1,
    countryName: "Bangladesh",
    countryCode: "BD",
    currencyCode: "BDT",
    phnCode: "+88",
    state: "Uttara",
    city: "Dhaka",
    action: "Action",
  },
  {
    id: 2,
    countryName: "Bangladesh",
    countryCode: "BD",
    currencyCode: "BDT",
    phnCode: "+88",
    state: "Uttara",
    city: "Dhaka",
    action: "Action",
  },
  {
    id: 3,
    countryName: "Bangladesh",
    countryCode: "BD",
    currencyCode: "BDT",
    phnCode: "+88",
    state: "Uttara",
    city: "Dhaka",
    action: "Action",
  },
  {
    id: 4,
    countryName: "Bangladesh",
    countryCode: "BD",
    currencyCode: "BDT",
    phnCode: "+88",
    state: "Uttara",
    city: "Dhaka",
    action: "Action",
  },
  {
    id: 5,
    countryName: "Bangladesh",
    countryCode: "BD",
    currencyCode: "BDT",
    phnCode: "+88",
    state: "Uttara",
    city: "Dhaka",
    action: "Action",
  },
  {
    id: 6,
    countryName: "Bangladesh",
    countryCode: "BD",
    currencyCode: "BDT",
    phnCode: "+88",
    state: "Uttara",
    city: "Dhaka",
    action: "Action",
  },
  {
    id: 7,
    countryName: "Bangladesh",
    countryCode: "BD",
    currencyCode: "BDT",
    phnCode: "+88",
    state: "Uttara",
    city: "Dhaka",
    action: "Action",
  },
  {
    id: 8,
    countryName: "Bangladesh",
    countryCode: "BD",
    currencyCode: "BDT",
    phnCode: "+88",
    state: "Uttara",
    city: "Dhaka",
    action: "Action",
  },
];

const AllCountries = () => {
  const { dark, setDark } = themContext();

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
    setOpen(true);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
    setOpen2(true);
  };

  const onFileHandler = () => {
    if (selectFile.current) {
      selectFile.current.click();
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      cellClassName: "text-black dark:text-white",
    },
    {
      field: "countryName",
      headerName: "Country Name",
      width: 130,
      cellClassName: "text-black dark:text-white",
    },
    {
      field: "countryCode",
      headerName: "Country 2-Letter Code",
      width: 180,
      cellClassName: "text-black dark:text-white",
    },
    {
      field: "currencyCode",
      headerName: "Currency Code",
      width: 130,
      cellClassName: "text-black dark:text-white",
    },
    {
      field: "phnCode",
      headerName: "Phone Code",
      width: 130,
      cellClassName: "text-black dark:text-white",
    },
    {
      field: "state",
      headerName: "Sate",
      width: 80,
      cellClassName: "text-black dark:text-white",
    },
    {
      field: "city",
      headerName: "City",
      width: 80,
      cellClassName: "text-black dark:text-white",
    },
    {
      field: "action",
      headerName: "Action",
      type: "button",
      width: 120,
      cellClassName: "text-black dark:text-white",
      renderCell: (params) => (
        <>
          <button
            className="btn bg-redColor px-4 py-2 rounded-md"
            id="basic-button"
            aria-controls={opens ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={opens ? "true" : undefined}
            onClick={handleClick}
          >
            <span>
              <EditIcon style={{ fontSize: "18px" }} />
            </span>
            <span> Action</span>
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={opens}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose2}>Delete</MenuItem>
          </Menu>
        </>
      ),
      // renderCell: renderDetailsButton
    },
  ];

  return (
    <div className="mt-10 overflow-hidden ">
      <div className="country flex flex-col gap-4 ">
        <div className="country-left  w-[100%] xl:w-fit ">
          <Accordion>
            <AccordionSummary
              style={
                dark
                  ? { backgroundColor: "#242530" }
                  : { backgroundColor: "white" }
              }
              expandIcon={<ExpandMoreIcon className="dark:text-white" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <button className="dark:text-white text-black font-bold text-lg">
                Show Countries Content
              </button>
            </AccordionSummary>
            <AccordionDetails className="dark:bg-gray-700">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <DataGrid
                  disableRowSelectionOnClick={true}
                  onRowSelectionModelChange={(select) => {
                    console.log(select);
                  }}
                  style={dark ? { color: "white" } : { color: "black" }}
                  className="#AC1E23"
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                />
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="country-right   w-fit ">
          {" "}
          <Accordion>
            <AccordionSummary
              style={
                dark
                  ? { backgroundColor: "#242530" }
                  : { backgroundColor: "white" }
              }
              expandIcon={<ExpandMoreIcon className="dark:text-white" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="dark:text-white">
                <span className="text-black dark:text-white font-bold text-lg">
                  Bulk Import/Upload
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="dark:bg-gray-700">
              <div className="relative overflow-x-auto  sm:rounded-lg">
                <div className="p-4 flex flex-col gap-3">
                  <h3 className="dark:text-white text-sm">
                    Select CSV file to upload
                  </h3>

                  <div className="flex gap-2">
                    <input ref={selectFile} type="file" name="" id="file" />
                  </div>

                  <div>
                    <button
                      onClick={onFileHandler}
                      className="bg-purple-900 text-white rounded-md px-4 py-2 hover:text-gray-400"
                    >
                      IMPORT
                    </button>
                  </div>

                  <div className="flex flex-col gap-1 dark:text-white font-mono">
                    <h2 className=" text-lg font-bold">NOTE : </h2>
                    <div className="text-sm font-mono">
                      <p>1 - Acceptable format is CSV</p>
                      <p>2 - No Special Char in the file</p>
                      <p>3 - File should contain following seuence</p>
                    </div>

                    <div className=" flex justify-center mt-1">
                      <div className=" w-fit ">
                        <ul className="text-sm font-mono">
                          <li> Column A = Country</li>
                          <li> Column B = 2-Letter Code</li>
                          <li> Column C = Currency</li>
                          <li> Column D = Phone Code</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <EditModalCountry open={open} setOpen={setOpen} />
      <DeleteModal open={open2} setOpen={setOpen2} />
    </div>
  );
};

export default AllCountries;
