import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { DataGrid } from "@mui/x-data-grid";
import { themContext } from "../../../context/themeContext";

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
];

const CountryCity = () => {
  const { dark, setDark } = themContext();

  return (
    <div>
      <div className="country-left  md:w-[50%] w-[100%]  ">
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
    </div>
  );
};

export default CountryCity;
