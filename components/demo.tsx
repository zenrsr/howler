import { useState } from "react";
import { gsap } from "gsap";

export const Demo = () => {
  const [cardState, setCardState] = useState(["front", "front", "front"]);

  const cardContent = {
    front: [
      <div key={1}>Front Content 1</div>,
      <div key={2}>Front Content 2</div>,
      <div key={2}>Front Content 3</div>
    ],
    back: [
      <div key={4}>Back Content 1</div>,
      <div key={5}>Back Content 2</div>,
      <div key={6}>Back Content 3</div>
    ]
  };

  const handleCardFlip = (index: number) => {
    const newCardState = [...cardState];
    newCardState[index] = newCardState[index] === "front" ? "back" : "front";
    setCardState(newCardState);

    gsap.to(`.card-${index}`, {
      rotateY: newCardState[index] === "back" ? 180 : 0,
      duration: 0.6
    });
  };

  return (
    <div className="flex items-center justify-center gap-4">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`card-${index} w-60 h-96 cursor-pointer perspective`}
          onClick={() => handleCardFlip(index)}
        >
          <div
            className={`w-full h-full relative transform-style-preserve-3d transition-transform duration-600`}
          >
            <div
              className={`absolute w-full h-full backface-hidden ${
                cardState[index] === "back" ? "rotate-y-180" : ""
              }`}
            >
              {cardContent.front[index]}
            </div>
            <div
              className={`absolute w-full h-full backface-hidden rotate-y-180 ${
                cardState[index] === "back" ? "hidden" : "rotate-y-0"
              }`}
            >
              {cardContent.back[index]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
