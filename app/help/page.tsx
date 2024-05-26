"use client";
import GoBackButton from "@/components/GoBack";
import Yes from "@/components/Yes";
import { useRouter } from "next/navigation";
import React from "react";

const Help = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/htp");
  };
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between">
      <div
        className="h-full w-full flex items-center justify-center"
        style={{
          backgroundImage: 'url("/images/help.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <GoBackButton />
        <div className="flex w-auto h-auto rounded-full translate-x-[150%] translate-y-[80%]">
          <Yes handleClick={handleClick} />
        </div>
      </div>
    </main>
  );
};

export default Help;
