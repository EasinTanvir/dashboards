import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { themContext } from "../../../context/themeContext";

function EditModalCountry({ open, setOpen }) {
  const { dark, setDark } = themContext();

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="country-modal flex justify-center">
          <div className="country-modal-content bg-lightMode dark:bg-headerBg mt-10 py-4 px-6 rounded-md">
            <div>
              <form>
                <div className="dark:text-white   text-center">
                  <h1 className="font-bold text-2xl ">
                    Update Country Data
                    <hr className="mt-2" />
                  </h1>
                </div>
                <div className="mt-4">
                  <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0">
                      <label
                        className="dark:text-white text-black font-bold mb-2 text-lg"
                        htmlFor=""
                      >
                        Country Name
                      </label>
                      <input
                        className="dark:text-white text-black bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                        type="text"
                        name=""
                        id=""
                        value="Bangladesh"
                        required
                        placeholder="type country full name"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <label className="dark:text-white text-black" htmlFor="">
                        Country Code
                      </label>
                      <input
                        required
                        className="dark:text-white text-black bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                        type="text"
                        name=""
                        value="BD"
                        id=""
                        placeholder="type country 2-letetr code"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <label className="dark:text-white text-black" htmlFor="">
                        Currency Code
                      </label>
                      <input
                        required
                        className="dark:text-white text-black bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                        type="text"
                        value="BDT"
                        name=""
                        id=""
                        placeholder="type currency code"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <label className="dark:text-white text-black" htmlFor="">
                        Phone Code
                      </label>
                      <input
                        required
                        value={+88}
                        className="dark:text-white text-black bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                        type="text"
                        name=""
                        id=""
                        placeholder="type phone code"
                      />
                    </div>
                    <div className="flex flex-col gap-0">
                      <label className="dark:text-white text-black" htmlFor="">
                        State
                      </label>
                      <input
                        required
                        value="Uttara"
                        className="dark:text-white text-black bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                        type="text"
                        name=""
                        id=""
                        placeholder="type country state"
                      />
                    </div>{" "}
                    <div className="flex flex-col gap-0">
                      <label className="dark:text-white text-black" htmlFor="">
                        City
                      </label>
                      <input
                        value="Dhaka"
                        required
                        className="dark:text-white text-black bg-transparent outline-none border border-gray-400 py-1 rounded-md px-2"
                        type="text"
                        name=""
                        id=""
                        placeholder="type country city"
                      />
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button
                        className="btn rounded-md bg-purple-800 px-4 py-2  hover:text-gray-300 text-white"
                        type="submit"
                      >
                        Add New Country
                      </button>
                      <button
                        onClick={() => setOpen(false)}
                        className="btn rounded-md bg-redColor hover:text-gray-300 px-4 py-2 text-white"
                        type="button"
                      >
                        Cacel
                      </button>
                    </div>
                  </form>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default EditModalCountry;
