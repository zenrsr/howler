"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      className="fixed top-2 left-2 px-4 py-2"
      onClick={() => router.back()}
      title="Go Back"
    >
      <Image
        src="/images/goBack.png"
        height={100}
        width={100}
        alt="back"
        className="hover:scale-110 transition-all ease-in-out duration-300"
      />
    </button>
  );
};

export default GoBackButton;
