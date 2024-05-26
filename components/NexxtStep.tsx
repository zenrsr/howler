import Image from "next/image";
import React from "react";

const NextStep = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div
      className="flex items-center justify-center min-h-auto cursor-pointer rounded-full outline-none focus:outline-none transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:animate-pulse"
      onClick={handleClick}
    >
      <div className=" text-white p-4 rounded-full ">
        <Image
          src={"/images/nextimage.png"}
          alt="playButton"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default NextStep;
