"use client";
import GoBackButton from "@/components/GoBack";
import { HowToPlay } from "@/components/how-to-play";
import React from "react";

const HTP = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between">
      <div
        className="h-full w-full flex items-center justify-center"
        style={{
          backgroundImage: 'url("/images/htp.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <GoBackButton />
        <HowToPlay />
      </div>
    </main>
  );
};

export default HTP;
