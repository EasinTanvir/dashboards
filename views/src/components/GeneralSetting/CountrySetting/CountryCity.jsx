import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { DataGrid } from "@mui/x-data-grid";
import { themContext } from "../../../context/themeContext";
import AddNewCity from "./AddNewCity";
import { Tooltip } from "@mui/material";

const rows = [
  {
    id: 1,
    countryName: "Bangladesh",
    state: "Uttara",
    city: "Dhaka",
  },
  {
    id: 2,
    countryName: "Bangladesh",
    state: "Uttara",
    city: "Dhaka",
  },
  {
    id: 3,
    countryName: "Bangladesh",
    state: "Uttara",
    city: "Dhaka",
  },
  {
    id: 4,
    countryName: "Bangladesh",
    state: "Uttara",
    city: "Dhaka",
  },
  {
    id: 5,
    countryName: "Bangladesh",
    state: "Uttara",
    city: "Dhaka",
  },
  {
    id: 6,
    countryName: "Bangladesh",
    state: "Uttara",
    city: "Dhaka",
  },
];

const columns = [
  {
    field: "id",
    headerClassName: "border border-black",
    width: 70,
    sortable: false,
    cellClassName: "text-black dark:text-white border border-t-0 border-r-0",
    renderHeader: (params) => (
      <Tooltip placement="top" title="ID">
        <b style={{ fontSize: "12px", fontWeight: 900 }}>Id</b>
      </Tooltip>
    ),
  },
  {
    field: "countryName",
    headerClassName: "border border-black",
    width: 180,
    sortable: false,
    renderHeader: (params) => (
      <Tooltip placement="top" title="Country Name">
        <b style={{ fontSize: "12px", fontWeight: 900 }}>Country Name</b>
      </Tooltip>
    ),
    cellClassName: "text-black dark:text-white border border-t-0 border-r-0",
  },

  {
    field: "state",
    sortable: false,
    headerClassName: "border border-black",

    width: 180,
    cellClassName: "text-black dark:text-white border border-t-0 border-r-0",
    renderHeader: (params) => (
      <Tooltip placement="top" title="State">
        <b style={{ fontSize: "12px", fontWeight: 900 }}>State</b>
      </Tooltip>
    ),
  },
  {
    field: "city",
    sortable: false,

    width: 180,
    cellClassName: "text-black dark:text-white border border-t-0 border-r-0",
    renderHeader: (params) => (
      <Tooltip placement="top" title="City">
        <b style={{ fontSize: "12px", fontWeight: 900 }}>City</b>
      </Tooltip>
    ),
  },
];

const CountryCity = () => {
  const { dark, setDark, isScreenSmall } = themContext();
  const [accordionOne, setAccordionOne] = useState(true);

  return (
    <div className="flex md:flex-row flex-col gap-2">
      <div className="country-left  sm:w-[71%] w-full  ">
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
            <button className="dark:text-white text-black font-myfont font-bold text-md">
              Show State And State
            </button>
          </AccordionSummary>
          <AccordionDetails className="dark:bg-gray-700">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
              <DataGrid
                disableRowSelectionOnClick={true}
                onRowSelectionModelChange={(select) => {
                  console.log(select);
                }}
                style={{
                  color: dark ? "white" : "black",
                  fontSize: isScreenSmall ? "14px" : "12px",
                }}
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                className="custom-datagrid"
                pageSizeOptions={[5, 10]}
                checkboxSelection
                rowHeight={32}
                columnHeaderHeight={42}
              />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <AddNewCity />
    </div>
  );
};

export default CountryCity;
