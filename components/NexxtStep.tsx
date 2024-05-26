import Image from "next/image";
import React from "react";

const NextStep = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div
      className="flex items-center justify-center min-h-auto cursor-pointer rounded-full outline-none focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
      onClick={handleClick}
    >
      <div className=" text-white p-4 rounded-full ">
        <Image
          src={"/images/next.png"}
          alt="playButton"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default NextStep;
