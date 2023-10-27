import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { DataGrid } from "@mui/x-data-grid";
import { themContext } from "../../../context/themeContext";
import AddNewState from "./AddNewState";
import { Tooltip } from "@mui/material";

const rows = [
  {
    id: 1,
    countryName: "Bangladesh",
    state: "Uttara",
  },
  {
    id: 2,
    countryName: "Bangladesh",
    state: "Uttara",
  },
  {
    id: 3,
    countryName: "Bangladesh",
    state: "Uttara",
  },
  {
    id: 4,
    countryName: "Bangladesh",
    state: "Uttara",
  },
  {
    id: 5,
    countryName: "Bangladesh",
    state: "Uttara",
  },
  {
    id: 6,
    countryName: "Bangladesh",
    state: "Uttara",
  },
];

const columns = [
  {
    field: "id",
    sortable: false,
    width: 70,
    cellClassName: "text-black dark:text-white border border-t-0 border-r-0",
    renderHeader: (params) => (
      <Tooltip placement="top" title="ID">
        <b style={{ fontSize: "14px", fontWeight: 900 }}>Id</b>
      </Tooltip>
    ),
  },
  {
    field: "countryName",
    width: 130,
    sortable: false,
    renderHeader: (params) => (
      <Tooltip placement="top" title="Country Name">
        <b style={{ fontSize: "14px", fontWeight: 900 }}>Country Name</b>
      </Tooltip>
    ),
    cellClassName: "text-black dark:text-white border border-t-0 border-r-0",
  },

  {
    field: "state",
    sortable: false,

    width: 80,
    cellClassName: "text-black dark:text-white border border-t-0 border-r-0",
    renderHeader: (params) => (
      <Tooltip placement="top" title="State">
        <b style={{ fontSize: "14px", fontWeight: 900 }}>State</b>
      </Tooltip>
    ),
  },
];

const CountryState = () => {
  const { dark, setDark, isScreenSmall } = themContext();
  const [accordionOne, setAccordionOne] = useState(true);

  return (
    <div className="flex gap-3  md:flex-row flex-col">
      <div className="country-left  md:w-fit w-[100%]  ">
        <Accordion expanded={accordionOne}>
          <AccordionSummary
            onClick={() => setAccordionOne(!accordionOne)}
            style={{
              color: dark ? "white" : "black",
            }}
            expandIcon={<ExpandMoreIcon className="dark:text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <button className="dark:text-white text-black font-bold text-md">
              Show Countries And State
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
                pageSizeOptions={[5, 10]}
                checkboxSelection
                className="custom-datagrid"
                rowHeight={38}
                columnHeaderHeight={42}
              />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      <AddNewState />
    </div>
  );
};

export default CountryState;
