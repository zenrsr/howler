// MatchModal.tsx
"use client";
import { IoMdCloseCircleOutline } from "react-icons/io";
import React, { useEffect } from "react";

interface MatchedCardModal {
  id: string;
  color: string;
  fruit: string;
}

interface MatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  matchedCards: MatchedCardModal[];
  modalCount: number;
}

const MatchModal: React.FC<MatchModalProps> = ({
  isOpen,
  onClose,
  matchedCards,
  modalCount
}) => {
  useEffect(() => {
    if (isOpen && modalCount > 5) {
      onClose();
    }
  }, [isOpen, modalCount, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-gray-100 p-8 rounded-lg shadow-lg">
        <button
          className="absolute top-0 right-0 p-2"
          onClick={onClose}
          title="Close"
        >
          <span className="text-red-500 text-2xl">
            <IoMdCloseCircleOutline />
          </span>
        </button>
        <h2 className="text-3xl mb-4 text-center font-semibold text-yellow-700">
          It&apos;s a Match!
        </h2>
        <ul className="flex flex-row items-center justify-center gap-4">
          {matchedCards.map((card, index) => (
            <li
              key={index}
              className="w-32 h-32 bg-gray-200 rounded-lg shadow-md flex items-center justify-center"
            >
              {card.fruit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchModal;
