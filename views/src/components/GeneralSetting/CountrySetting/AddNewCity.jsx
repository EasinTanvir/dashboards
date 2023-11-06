import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { themContext } from "../../../context/themeContext";
import Autocomplete from "@mui/material/Autocomplete";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material";
const AddNewCity = () => {
  const { dark } = themContext();
  const [accordionTwo, setAccordionTwo] = useState(true);
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const largeScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const top100Films = [
    { label: "Bangladesh" },
    { label: "India" },
    { label: "Singapour" },
    { label: "Pakistan" },
    { label: "London" },
  ];

  return (
    <div className="country-right   sm:w-[33%] w-full overflow-auto  ">
      <Accordion expanded={accordionTwo}>
        <AccordionSummary
          onClick={() => setAccordionTwo(!accordionTwo)}
          style={
            dark ? { backgroundColor: "#242530" } : { backgroundColor: "white" }
          }
          expandIcon={<ExpandMoreIcon className="dark:text-white" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="dark:text-white">
            <span className="text-black dark:text-white font-myfont font-bold text-md">
              Add New City
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="dark:bg-gray-700">
          <div className="relative overflow-x-auto  sm:rounded-lg">
            <form>
              <div className="mt-4">
                <form>
                  <div className="flex sm:flex-row flex-col    gap-2">
                    <div className="flex flex-col gap-0">
                      <label className="flex flex-col">
                        <b style={{ fontSize: "13px", fontWeight: 900 }}>
                          Country Name
                        </b>
                        <Autocomplete
                          sx={{
                            display: "inline-block",
                            "& input": {
                              border: "gray",
                              borderWidth: "1px",
                              width: largeScreen ? 140 : "100%",
                              borderStyle: "solid",
                              borderRadius: "5px",
                              padding: "4px",
                              outline: "none",
                            },
                          }}
                          openOnFocus={false}
                          onMouseDownCapture={(e) => e.stopPropagation()}
                          clearOnBlur={true}
                          id="custom-input-demo"
                          options={top100Films}
                          renderInput={(params) => (
                            <div ref={params.InputProps.ref}>
                              <input
                                placeholder="Country Name"
                                autoComplete="off"
                                type="text"
                                {...params.inputProps}
                              />
                            </div>
                          )}
                        />
                      </label>
                    </div>
                    <div className="flex flex-col gap-0">
                      <b style={{ fontSize: "13px", fontWeight: 900 }}>State</b>
                      <input
                        required
                        className="text-black sm:w-36 dark:text-white bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                        type="text"
                        name=""
                        id=""
                        placeholder="Country Name"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-0 mt-2">
                    <b style={{ fontSize: "13px", fontWeight: 900 }}>City</b>
                    <input
                      required
                      className="text-black sm:w-40 dark:text-white bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                      type="text"
                      name=""
                      id=""
                      placeholder="Country Name"
                    />
                  </div>

                  <div className=" gap-2 mt-4 mb-4 flex justify-around">
                    <button
                      className="btn rounded-md w-24 bg-purple-800 px-4 py-2  hover:text-gray-300 text-white"
                      type="submit"
                    >
                      Reset
                    </button>{" "}
                    <button
                      className="btn rounded-md w-24 bg-purple-800 px-4 py-2  hover:text-gray-300 text-white"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AddNewCity;
