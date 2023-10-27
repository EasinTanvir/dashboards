import React, { useRef, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
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
import AddNewCountry from "./AddNewCountry";
import api from "../../../api";
import { Circles } from "react-loader-spinner";

const AllCountries = () => {
  const { dark, setDark } = themContext();
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

  const onFileHandler = () => {
    if (selectFile.current) {
      selectFile.current.click();
    }
  };
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
  const columns = [
    {
      field: "id",
      headerName: "ID",
      sortable: false,
      maxWidth: 10,
      cellClassName: "text-black dark:text-white ",
      renderHeader: (params) => (
        <b style={{ fontSize: "14px", fontWeight: 900 }}>ID</b>
      ),
    },
    {
      field: "countryName",
      sortable: false,
      width: 120,
      cellClassName: "text-black dark:text-white border border-black",
      renderHeader: (params) => (
        <Tooltip placement="top" title="Country Name">
          <b style={{ fontSize: "14px", fontWeight: 900 }}>Country Name</b>
        </Tooltip>
      ),
    },
    {
      field: "countryCode",
      width: 60,
      sortable: false,
      cellClassName: "text-black dark:text-white text-center ",

      renderHeader: (params) => (
        <Tooltip placement="top" title="Country 2-Letter Code">
          <b style={{ fontSize: "14px", fontWeight: 900 }}>Country Code</b>
        </Tooltip>
      ),
    },
    {
      field: "currencyCode",
      headerName: "Currency Code",
      width: 60,
      sortable: false,
      cellClassName: "text-black dark:text-white",
      renderHeader: (params) => (
        <Tooltip placement="top" title="Currency Code">
          <b style={{ fontSize: "14px", fontWeight: 900 }}>Currency Code</b>
        </Tooltip>
      ),
    },
    {
      field: "phnCode",
      headerName: "Phone Code",
      width: 60,
      sortable: false,
      cellClassName: "text-black dark:text-white",
      renderHeader: (params) => (
        <Tooltip placement="top" title="Phone Code">
          <b style={{ fontSize: "14px", fontWeight: 900 }}>Phone Code</b>
        </Tooltip>
      ),
    },
    {
      field: "state",
      headerName: "Sate",
      sortable: false,
      width: 90,
      cellClassName: "text-black dark:text-white border-none outline-none",
      renderHeader: (params) => (
        <Tooltip placement="top" title="State">
          <b style={{ fontSize: "14px", fontWeight: 900 }}>State</b>
        </Tooltip>
      ),
    },
    {
      field: "city",
      headerName: "City",
      sortable: false,
      width: 90,
      cellClassName: "text-black dark:text-white",
      headerclassname: "bold-header",
      renderHeader: (params) => (
        <Tooltip placement="top" title="City">
          <b style={{ fontSize: "14px", fontWeight: 900 }}>City</b>
        </Tooltip>
      ),
    },
    {
      field: "action",
      type: "button",
      sortable: false,
      width: 90,
      cellClassName: "text-black dark:text-white",
      renderHeader: (params) => (
        <b style={{ fontSize: "14px", fontWeight: 900 }}>Action</b>
      ),
      renderCell: (params) => {
        // Define a function to handle the cell click
        const handleCellClick = (event) => {
          // Prevent the click event from propagating to the row selection
          event.stopPropagation();
          // Add your custom cell click logic here
          // For example, you can trigger an action when the cell is clicked
          console.log("Cell clicked in row with ID: ", params.id);
        };

        return (
          <div onClick={handleCellClick}>
            {/* Your cell content */}
            <button
              className="btn bg-redColor px-2 py-1 rounded-md"
              id="basic-button"
              aria-controls={opens ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={opens ? "true" : undefined}
              onClick={handleClick}
            >
              <span>
                <EditIcon className="text-white" style={{ fontSize: "18px" }} />
              </span>
              <span className="text-white"> Action</span>
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
              <MenuItem onClick={handleClose2}>Edit</MenuItem>
              <MenuItem onClick={handleClose3}>Delete</MenuItem>
            </Menu>
          </div>
        );
      },
    },
  ];

  const getRowClassName = () => {
    return "custom-row-class";
  };

  const [imageLoader, setImageLoader] = useState(false);

  const onFileUploadHandler = async (image) => {
    const formData = new FormData();
    formData.append("file", image);

    try {
      setImageLoader(true);
      const { data } = await api.post("/admin/getCountry", formData);

      setImageLoader(false);
    } catch (err) {
      console.log(err);
      setImageLoader(false);
    }
  };

  return (
    <div className="overflow-hidden mt-2 ">
      <div className="country flex lg:flex-row flex-col  gap-2 ">
        <div className="country-left lg:w-[65%] xl:w-fit   ">
          <Accordion expanded={accordionOne}>
            <AccordionSummary
              onClick={() => setAccordionOne(!accordionOne)}
              style={
                dark
                  ? { backgroundColor: "#242530" }
                  : { backgroundColor: "white" }
              }
              expandIcon={<ExpandMoreIcon className="dark:text-white" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <button className="dark:text-white text-black font-bold text-md ">
                Show Countries Content
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
                    color: dark ? "white" : "black",
                  }}
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
                  getRowClassName={getRowClassName}
                />
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="country-right   lg:w-[35%] xl:w-fit ">
          {" "}
          <Accordion expanded={accordionTwo}>
            <AccordionSummary
              onClick={() => setAccordionTwo(!accordionTwo)}
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
                <span className="text-black dark:text-white font-bold text-md">
                  Bulk Import/Upload
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="dark:bg-gray-700">
              <div className="relative overflow-x-auto  sm:rounded-lg">
                <div className="px-3 py-2 flex flex-col gap-2">
                  <h3 className="dark:text-white text-md font-semibold">
                    *Select CSV file to upload
                  </h3>

                  <div className="flex gap-2">
                    <input
                      style={{ display: "none" }}
                      onChange={(e) => onFileUploadHandler(e.target.files[0])}
                      ref={selectFile}
                      type="file"
                      name=""
                      id="file"
                      accept=".csv"
                    />
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={onFileHandler}
                      className="bg-purple-900 text-white rounded-md px-4 py-2 hover:text-gray-400"
                    >
                      {imageLoader ? (
                        <Circles
                          height="22"
                          width="45"
                          color="#4fa94d"
                          ariaLabel="circles-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                        />
                      ) : (
                        "IMPORT"
                      )}
                    </button>
                    {imageLoader && (
                      <span className="text-sm">please wait...</span>
                    )}
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
      <AddNewCountry />

      <EditModalCountry open={open} setOpen={setOpen} />
      <DeleteModal open={open2} setOpen={setOpen2} />
    </div>
  );
};

export default AllCountries;
