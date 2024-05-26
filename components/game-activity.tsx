/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect, JSX, useRef } from "react";
import gsap from "gsap";
import { Progress } from "./ui/progress";
import { BananaIcon, HeartIcon } from "@/constants/iconsData";
import MatchModal from "./MatchModal";
import GameWinModal from "./GameWinModal";
import GameOverModal from "./GameOverModal";

interface MatchedCard {
  id: string;
  color: string;
}

interface Card {
  id: string;
  color: string;
  matched?: boolean;
  flipped: boolean;
  icon?: JSX.Element;
  fruit?: string;
}

const fruits = {
  A: (
    <img
      src="/images/apple.png"
      className="w-full h-full object-cover"
      alt="Apple"
    />
  ),
  B: (
    <img
      src="/images/banana.png"
      className="w-full h-full object-cover"
      alt="Banana"
    />
  ),
  C: (
    <img
      src="/images/cherry.png"
      className="w-full h-full object-cover"
      alt="Cherry"
    />
  ),
  D: (
    <img
      src="/images/strawberry.png"
      className="w-full h-full object-cover"
      alt="Berry"
    />
  ),
  E: (
    <img
      src="/images/melon.png"
      className="w-full h-full object-cover"
      alt="Melon"
    />
  ),
  F: (
    <img
      src="/images/orange.png"
      className="w-full h-full object-cover"
      alt="Orange"
    />
  )
};

const shuffleCards = (
  cards: {
    id: string;
    color: string;
    matched: boolean;
    flipped: boolean;
    icon: JSX.Element;
    fruit: string;
  }[]
) => {
  let shuffledCards = [...cards];
  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }
  return shuffledCards;
};

const initialCards = [
  {
    id: "A",
    color: "pink",
    matched: false,
    flipped: false,
    icon: <BananaIcon className="text-pink-600" />,
    fruit: fruits.A
  },
  {
    id: "B",
    color: "pink",
    matched: false,
    flipped: false,
    icon: <BananaIcon className="text-pink-600" />,
    fruit: fruits.B
  },
  {
    id: "C",
    color: "pink",
    matched: false,
    flipped: false,
    icon: <BananaIcon className="text-pink-600" />,
    fruit: fruits.C
  },
  {
    id: "D",
    color: "pink",
    matched: false,
    flipped: false,
    icon: <BananaIcon className="text-pink-600" />,
    fruit: fruits.D
  },
  {
    id: "E",
    color: "pink",
    matched: false,
    flipped: false,
    icon: <BananaIcon className="text-pink-600" />,
    fruit: fruits.E
  },
  {
    id: "F",
    color: "pink",
    matched: false,
    flipped: false,
    icon: <BananaIcon className="text-pink-600" />,
    fruit: fruits.F
  },
  {
    id: "A",
    color: "blue",
    matched: false,
    flipped: false,
    icon: <HeartIcon className="text-blue-600" />,
    fruit: (
      <img
        src="/images/appleBlue.png"
        className="w-full h-full object-cover rounded-lg"
        alt="Apple"
      />
    )
  },
  {
    id: "B",
    color: "blue",
    matched: false,
    flipped: false,
    icon: <HeartIcon className="text-blue-600" />,
    fruit: (
      <img
        src="/images/bananaBlue.png"
        className="w-full h-full object-cover rounded-lg"
        alt="Apple"
      />
    )
  },
  {
    id: "C",
    color: "blue",
    matched: false,
    flipped: false,
    icon: <HeartIcon className="text-blue-600" />,
    fruit: (
      <img
        src="/images/cherryBlue.png"
        className="w-full h-full object-cover rounded-lg"
        alt="Apple"
      />
    )
  },
  {
    id: "D",
    color: "blue",
    matched: false,
    flipped: false,
    icon: <HeartIcon className="text-blue-600" />,
    fruit: (
      <img
        src="/images/berryBlue.png"
        className="w-full h-full object-cover rounded-lg"
        alt="Apple"
      />
    )
  },
  {
    id: "E",
    color: "blue",
    matched: false,
    flipped: false,
    icon: <HeartIcon className="text-blue-600" />,
    fruit: (
      <img
        src="/images/melonBlue.png"
        className="w-full h-full object-cover rounded-lg"
        alt="Apple"
      />
    )
  },
  {
    id: "F",
    color: "blue",
    matched: false,
    flipped: false,
    icon: <HeartIcon className="text-blue-600" />,
    fruit: (
      <img
        src="/images/orangeBlue.png"
        className="w-full h-full object-cover rounded-lg"
        alt="Apple"
      />
    )
  }
];

export default function MemoryGame() {
  const [cards, setCards] = useState(initialCards);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [lives, setLives] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [matchedCardsInfo, setMatchedCardsInfo] = useState<MatchedCard[]>([]);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [modalCount, setModalCount] = useState(0);

  useEffect(() => {
    setCards(shuffleCards(initialCards));
  }, []);

  useEffect(() => {
    if (matchedPairs === initialCards.length / 2) {
      setIsGameWon(true);
    }
  }, [matchedPairs]);

  useEffect(() => {
    if (lives === 0) {
      setIsGameOver(true);
    }
  }, [lives]);

  const handleMatch = (matchedCards: MatchedCard[]) => {
    setMatchedPairs(matchedPairs + 1);
    setShowModal(true);
    setMatchedCardsInfo(matchedCards);

    // Increment the modal count
    setModalCount(modalCount + 1);
  };

  const handlePlayAgain = () => {
    restartGame();
    setIsGameWon(false);
    setIsGameOver(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setMatchedCardsInfo([]);
  };

  const handleClick = (clickedCard: Card) => {
    if (clickedCard.flipped || flippedCards.length === 2) return;

    const newCards = cards.map((card) =>
      card.id === clickedCard.id && card.color === clickedCard.color
        ? { ...card, flipped: true }
        : card
    );

    setCards(newCards);
    setFlippedCards([...flippedCards, clickedCard]);

    if (flippedCards.length === 1) {
      setMoves(moves + 1);
      const [firstCard] = flippedCards;

      if (
        clickedCard.id === firstCard.id &&
        clickedCard.color !== firstCard.color
      ) {
        setTimeout(() => {
          const updatedCards = newCards.map((card) =>
            card.flipped ? { ...card, matched: true } : card
          );
          setCards(updatedCards);
          setFlippedCards([]);
          handleMatch([firstCard, clickedCard]);
        }, 1000);
      } else {
        setTimeout(() => {
          setCards(newCards.map((card) => ({ ...card, flipped: false })));
          setFlippedCards([]);
          setLives(lives - 1);
        }, 1000);
      }
    }
  };

  const renderIconPink = (card: {
    id?: string;
    color?: string;
    matched: any;
    flipped: any;
    icon: any;
    fruit: any;
  }) => {
    if (card.matched) {
      return <span className="hidden"></span>;
    } else if (card.flipped) {
      return <span className="content">{card.fruit}</span>;
    } else {
      return (
        <span className="content text-white font-bold text-3xl">
          {card.icon}
        </span>
      );
    }
  };

  const renderIconBlue = (card: {
    id?: string;
    color?: string;
    matched: any;
    flipped: any;
    icon: any;
    fruit: any;
  }) => {
    if (card.matched) {
      return <span className="hidden"></span>;
    } else if (card.flipped) {
      return (
        <span className="content h-full w-full transition-all ease-in-out duration-200 rounded-4xl">
          {card.fruit}
        </span>
      );
    } else {
      return (
        <span className="content text-white font-bold text-3xl">
          {card.icon}
        </span>
      );
    }
  };

  const restartGame = () => {
    setCards(
      shuffleCards(
        initialCards.map((card) => ({
          ...card,
          matched: false,
          flipped: false
        }))
      )
    );
    setFlippedCards([]);
    setMoves(0);
    setMatchedPairs(0);
    setLives(5); // Resets number of lives
  };

  return (
    <div className="flex flex-col items-center justify-center h-3/4 w-3/4 rounded-3xl bg-white bg-opacity-15 backdrop-blur-lg">
      <div className="w-full max-w-3xl px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500">
          Help Mizo get some{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400">
            Bananas!
          </span>
        </h1>
        <div className="flex w-full gap-4 mb-4 text-white justify-between items-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={restartGame}
          >
            Restart Game
          </button>
          <div className="flex items-center gap-4">
            <div>Moves: {moves}</div>
            <div>Matched Pairs: {matchedPairs}</div>
            <div>Lives: {lives}</div>
          </div>
        </div>
        <div className="mb-4">
          <Progress
            className="h-4 rounded-full bg-gray-300 dark:bg-gray-800"
            value={(matchedPairs / (initialCards.length / 2)) * 100}
          />
        </div>

        <div className="flex gap-4 ">
          <div className="grid grid-cols-3 gap-4">
            {cards
              .filter((card) => card.color === "pink")
              .map((card, index) => (
                <div
                  key={index}
                  className={`w-full h-40 aspect-square cursor-pointer rounded-lg shadow-lg flex items-center justify-center border-[1px] border-gray-500 ${
                    card.matched ? "bg-transparent" : "bg-pink-300"
                  }`}
                  onClick={() => handleClick(card)}
                >
                  {renderIconPink(card)}
                </div>
              ))}
          </div>
          <div className="grid grid-cols-3 gap-4 ">
            {cards
              .filter((card) => card.color === "blue")
              .map((card, index) => (
                <div
                  key={index}
                  className={`w-full h-40 aspect-square cursor-pointer rounded-lg shadow-lg flex items-center justify-center border-[1px] border-gray-500 ${
                    card.matched ? "bg-transparent" : "bg-blue-300"
                  }`}
                  onClick={() => handleClick(card)}
                >
                  {renderIconBlue(card)}
                </div>
              ))}
          </div>
        </div>
        {/* Modal Components */}
        <MatchModal
          isOpen={showModal}
          onClose={handleCloseModal}
          matchedCards={matchedCardsInfo}
          onPlayAgain={handlePlayAgain}
          modalCount={modalCount}
        />
        {isGameWon && <GameWinModal onPlayAgain={handlePlayAgain} />}
        {isGameOver && <GameOverModal onPlayAgain={handlePlayAgain} />}
      </div>
    </div>
  );
}
