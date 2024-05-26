import Image from "next/image";
import React from "react";

const Yes = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <Image
      src="/images/yes.png"
      width={200}
      height={200}
      alt="yes"
      className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
      onClick={handleClick}
    />
  );
};

export default Yes;
