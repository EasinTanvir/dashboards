import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { DataGrid } from "@mui/x-data-grid";
import { themContext } from "../../../context/themeContext";
import AddNewState from "./AddNewState";
import AddNewNeighborHood from "./AddNewNeighborHood";

const rows = [
  {
    id: 1,
    countryName: "Bangladesh",
    state: "Uttara",
    city: "Dhaka",
    neighbourhood: "Tangail",
  },
  {
    id: 2,
    countryName: "Bangladesh",
    state: "Uttara",
    city: "Dhaka",
    neighbourhood: "Motijil",
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
    headerName: "State",
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
    field: "neighbourhood",
    headerName: "Neighbourhood",
    width: 120,
    cellClassName: "text-black dark:text-white",
  },
];

const Neighbourhood = () => {
  const { dark, setDark } = themContext();
  const [accordionOne, setAccordionOne] = useState(true);

  return (
    <div className="flex md:flex-row flex-col gap-2">
      <div className="country-left  md:w-fit w-[100%]  ">
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
            <button className="dark:text-white text-black font-bold text-lg">
              Show Countries, State and Neighbourhood
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

      <AddNewNeighborHood />
    </div>
  );
};

export default Neighbourhood;
