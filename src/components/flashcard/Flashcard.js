import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Icon } from "react-icons-kit";
import { thinLeft } from "react-icons-kit/entypo/thinLeft";
import { thinRight } from "react-icons-kit/entypo/thinRight";
import { ic_lightbulb } from "react-icons-kit/md/ic_lightbulb";
import "./Flashcard.css";

const Flashcard = ({ currentCard }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const mockData = [
    {
      question: "What is our project group number?",
      answer: "4",
      hint: "The group number is a single-digit number",
      tags: ["code the dream", "practicum"],
    },
    {
      question: "what is a GET request?",
      answer: "it retrieves data, usually from a database",
      hint: "PATCH updates data",
      tags: ["Javascript", "API"],
    },
    {
      question: "list three primitive data types",
      answer: "boolean, integer, string ",
      hint: "true, false",
      tags: ["Javascript", "data types"],
    },
  ];

  const data = mockData[cardIndex];

  const handleNextCard = (event) => {
    event.stopPropagation();
    setIsFlipped(false);
    setShowHint(false);
    setCardIndex((prevIndex) => (prevIndex + 1) % mockData.length);
  };

  const handlePreviousCard = (event) => {
    event.stopPropagation();
    setIsFlipped(false);
    setShowHint(false);
    setCardIndex(
      (prevIndex) => (prevIndex - 1 + mockData.length) % mockData.length,
    );
  };

  const handleHint = (event) => {
    event.stopPropagation();
    setShowHint(!showHint);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const totalCards = mockData.length;

  return (
    <div className="card">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
        containerStyle={{ height: "400px" }}
        flipSpeedFrontToBack={0.5}
        flipSpeedBackToFront={0.5}
      >
        <div className="card-front" key="front" onClick={handleFlip}>
          <p>{data.question}</p>
          <div className="hint-section">
            <div className="hint-icon-container" onClick={handleHint}>
              <Icon icon={ic_lightbulb} size={24} className="hint-icon" />
            </div>
            {showHint && <p className="hint-text">{data.hint}</p>}
          </div>
        </div>
        <div className="card-back" key="back" onClick={handleFlip}>
          <p>{data.answer}</p>
        </div>
      </ReactCardFlip>

      <div className="skip-button">
        <Icon
          icon={thinLeft}
          size={32}
          onClick={(event) => handlePreviousCard(event)}
        />
        <div className="card-index">
          {cardIndex + 1}/{totalCards}
        </div>
        <Icon
          icon={thinRight}
          size={32}
          onClick={(event) => handleNextCard(event)}
        />
      </div>
    </div>
  );
};

export default Flashcard;
