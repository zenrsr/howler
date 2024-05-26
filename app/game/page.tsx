import GameActivity from "@/components/game-activity";
import React from "react";

const Game = () => {
  return (
    <div
      className="bg-transparent h-screen w-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/images/game.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <GameActivity />
    </div>
  );
};

export default Game;
