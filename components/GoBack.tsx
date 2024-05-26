"use client";
import { useRouter } from "next/navigation";
import React from "react";
const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      className="fixed top-2 left-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
};

export default GoBackButton;
