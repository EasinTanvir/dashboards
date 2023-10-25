import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { themContext } from "../../../context/themeContext";

function DeleteModal({ open, setOpen }) {
  const { dark, setDark } = themContext();

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="country-modal flex justify-center">
          <div className="country-modal-content h-96 flex justify-center items-center  bg-lightMode dark:bg-headerBg mt-28 py-4 px-6 rounded-md">
            <div className="">
              <div>
                <h1 className="text-black dark:text-white text-xl font-semibold">
                  Delete this Country Data Permanently?
                </h1>
              </div>
              <div className="mt-4 ">
                <div className="flex gap-2 mt-2">
                  <button
                    className="btn w-40 rounded-md bg-purple-800 px-4 py-2  hover:text-gray-300 text-white"
                    type="submit"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="btn rounded-md bg-redColor w-40 hover:text-gray-300 px-4 py-2 text-white"
                    type="button"
                  >
                    Cacel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DeleteModal;
