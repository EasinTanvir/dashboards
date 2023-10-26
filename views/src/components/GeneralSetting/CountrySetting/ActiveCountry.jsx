import React from "react";
import PictureInPictureIcon from "@mui/icons-material/PictureInPicture";

const ActiveCountry = ({ title }) => {
  return (
    <div className="bg-white w-64 dark:bg-headerBg dark:text-white rounded-md  text-black mt-1  mb-4">
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="font-semibold">Total {title} Active</h3>
          <span>
            <PictureInPictureIcon />
          </span>
        </div>

        <div className="text-center lg:w-[70%] w-full">
          <h3 className="text-2xl font-bold ">5</h3>
        </div>

        <div className="flex gap-2 items-center">
          <span className="bg-redColor px-2 text-sm py-1 rounded text-white">
            +11%
          </span>
          <span className="text-sm">From previous period</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveCountry;
