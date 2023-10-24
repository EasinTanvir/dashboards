import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "countryName", headerName: "Country Name", width: 130 },
  { field: "countryCode", headerName: "Country Code", width: 130 },
  { field: "currencyCode", headerName: "Currency Code", width: 130 },
  { field: "mobCode", headerName: "Mob Code", width: 130 },
];

const rows = [
  {
    id: 1,
    countryName: "Bangladesh",
    countryCode: "BD",
    currencyCode: "BDT",
    mobCode: "+88",
  },
  {
    id: 2,
    countryName: "Bangladesh",
    countryCode: "BD",
    currencyCode: "BDT",
    mobCode: "+88",
  },
];

const AllCountries = () => {
  const [select, setSelect] = useState(0);
  console.log(select);
  return (
    <div className="mt-10">
      <div>
        {/* <div className="w-full">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Countries Content</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col gap-4">
                <div className=" flex justify-end px-4">
                  <input
                    className="border px-4 py-2"
                    type="text"
                    placeholder="Search here"
                  />
                </div>
                <div style={{ height: 400, width: "100%" }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    onRowSelectionModelChange={(selection) => {
                      //Cannot reach any selection data. Need another attrib. attribute.
                      setSelect(selection);
                    }}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                      },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                  />
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div> */}
      </div>
    </div>
  );
};

export default AllCountries;
