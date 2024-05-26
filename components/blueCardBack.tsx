import { HeartIcon } from "@/constants/iconsData";
import React from "react";

const blueCardBack = () => {
  return (
    <div className="bg-blue-200 p-4 rounded-lg h-40 shadow-xl flex items-center justify-center">
      <HeartIcon className="text-blue-500 w-24 h-24" />
    </div>
  );
};

export default blueCardBack;
