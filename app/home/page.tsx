"use client";
import React from "react";
import { useRouter } from "next/navigation";
import PlayButton from "@/components/Playbutton";

const IntroScreen = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/start");
  };
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between">
      <div
        className="h-full w-full flex items-center justify-center "
        style={{
          backgroundImage: 'url("/images/intro-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="flex w-auto h-auto rounded-full translate-x-[100%] translate-y-[100%] outline-none border-none">
          <PlayButton handleClick={handleClick} />
        </div>
      </div>
    </main>
  );
};

export default IntroScreen;
