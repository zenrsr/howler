import React from "react";

const GameOverModal = ({ onPlayAgain }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
        <p className="mb-4">You ran out of lives. Better luck next time!</p>
        <button
          onClick={onPlayAgain}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
