import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { themContext } from "../../../context/themeContext";
const AddNewCity = () => {
  const { dark } = themContext();
  const [accordionTwo, setAccordionTwo] = useState(true);
  return (
    <div className="country-right   sm:w-fit w-full overflow-auto  ">
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
            <span className="text-black dark:text-white font-bold text-md">
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
                      <label
                        className="dark:text-white text-sm text-black font-semibold"
                        htmlFor=""
                      >
                        Country Name
                      </label>
                      <input
                        required
                        className="text-black sm:w-40 dark:text-white bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                        type="text"
                        name=""
                        id=""
                        placeholder="Country Name"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <label
                        className="dark:text-white text-sm text-black font-semibold"
                        htmlFor=""
                      >
                        State
                      </label>
                      <input
                        required
                        className="text-black sm:w-40 dark:text-white bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                        type="text"
                        name=""
                        id=""
                        placeholder="Country Name"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-0 mt-2">
                    <label
                      className="dark:text-white text-sm text-black font-semibold"
                      htmlFor=""
                    >
                      City
                    </label>
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
                      save
                    </button>{" "}
                    <button
                      className="btn rounded-md w-24 bg-purple-800 px-4 py-2  hover:text-gray-300 text-white"
                      type="submit"
                    >
                      Reset
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
