// GameWinModal.tsx
import React from "react";
import Image from "next/image";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface GameWinModalProps {
  onPlayAgain: () => void;
}

const GameWinModal: React.FC<GameWinModalProps> = ({ onPlayAgain }) => {
  const router = useRouter();
  const { width, height } = useWindowSize();

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-4  z-50">
      <div className="absolute inset-0"></div>
      <div className="relative bg-gray-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center gap-4">
        <Confetti width={width / 2} height={height} />
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-yellow-400">
          Mizo is grateful for the <span className="font-bold">Bananas!</span>
        </h1>
        <Image
          src="/images/success.png"
          alt="Winner"
          width={400}
          height={200}
          className="rounded-lg shadow-md"
        />
        <div className="flex items-center justify-evenly">
          <Button
            className=" text-white px-4 py-2 rounded-lg mr-2"
            onClick={onPlayAgain}
            type="button"
          >
            Play Again
          </Button>
          <Button
            className=" text-white px-4 py-2 rounded-lg mr-2"
            type="button"
            onClick={() => router.push("/")}
          >
            Yay! Ok
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameWinModal;
