import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { themContext } from "../../../context/themeContext";
import Autocomplete from "@mui/material/Autocomplete";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material";

const AddNewCountry = () => {
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

  const { dark } = themContext();
  const [accordionTwo, setAccordionTwo] = useState(true);

  const [input, setInput] = useState({
    countryName: "eas",
    countryCode: "",
    currencyCode: "",
    phoneCode: "",
    state: "",
    city: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(input);
  };

  const top100Films = [
    { label: "Bangladesh" },
    { label: "India" },
    { label: "Singapour" },
    { label: "Pakistan" },
    { label: "London" },
  ];
  return (
    <div className="country-right    sm:w-fit   ">
      {" "}
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
            <span className="text-white bg-redColor px-7 py-3 rounded-sm font-bold font-myfont text-md">
              Add New Country
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="dark:bg-gray-700">
          <div className="relative overflow-x-auto  sm:rounded-lg">
            <div className="mt-4">
              <form onSubmit={onSubmitHandler}>
                <div className="flex  flex-col  gap-2">
                  <div className="flex sm:flex-row flex-col gap-2">
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
                              padding: "2px",
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
                      <b style={{ fontSize: "13px", fontWeight: 900 }}>
                        Country Code
                      </b>
                      <input
                        onChange={onChangeHandler}
                        defaultValue={input.countryCode}
                        required
                        className="dark:text-white sm:w-36 text-sm text-black bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                        type="text"
                        name="countryCode"
                        id=""
                        placeholder="Country Code"
                      />
                    </div>
                  </div>

                  <div className="flex sm:flex-row flex-col gap-2">
                    {" "}
                    <div className="flex flex-col gap-0">
                      <b style={{ fontSize: "13px", fontWeight: 900 }}>
                        Currency Code
                      </b>
                      <input
                        onChange={onChangeHandler}
                        defaultValue={input.currencyCode}
                        required
                        className="text-black sm:w-36 text-sm dark:text-white bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                        type="text"
                        name="currencyCode"
                        id=""
                        placeholder="Currency Code"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <b style={{ fontSize: "13px", fontWeight: 900 }}>
                        Phone Code
                      </b>
                      <input
                        onChange={onChangeHandler}
                        defaultValue={input.phoneCode}
                        required
                        className="dark:text-white text-sm sm:w-36 text-black bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                        type="number"
                        name="phoneCode"
                        id=""
                        placeholder=" Phone Code"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 sm:flex-row flex-col">
                    <div className="flex flex-col gap-0">
                      <b style={{ fontSize: "13px", fontWeight: 900 }}>State</b>
                      <input
                        onChange={onChangeHandler}
                        defaultValue={input.state}
                        required
                        className="text-black sm:w-36 dark:text-white bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                        type="text"
                        name="state"
                        id=""
                        placeholder=" State"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <b style={{ fontSize: "13px", fontWeight: 900 }}>City</b>
                      <input
                        onChange={onChangeHandler}
                        defaultValue={input.city}
                        required
                        className="dark:text-white text-sm sm:w-36 text-black bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                        type="text"
                        name="city"
                        id=""
                        placeholder="City"
                      />
                    </div>
                  </div>
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
                    type="button"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AddNewCountry;
