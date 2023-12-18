import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import { Icon } from "react-icons-kit";
import { thinLeft } from "react-icons-kit/entypo/thinLeft";
import { thinRight } from "react-icons-kit/entypo/thinRight";
import { ic_lightbulb } from "react-icons-kit/md/ic_lightbulb";
import { AuthContext } from "../../App";
import "./Flashcard.css";

const Flashcard = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const { decks } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const deckId = queryParams.get("id");
    const selectedDeck = decks.find((deck) => deck._id === deckId);

    if (selectedDeck) {
      setFlashcards(selectedDeck.flashcards);
      const storedCardIndex = localStorage.getItem("cardIndex");
      if (storedCardIndex !== null) {
        setCardIndex(parseInt(storedCardIndex, 10));
      }
    }
  }, [location.search, decks]);

  useEffect(() => {
    localStorage.setItem("cardIndex", cardIndex.toString());
  }, [cardIndex]);

  const handleNextCard = () => {
    setIsFlipped(false);
    setShowHint(false);
    setCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePreviousCard = () => {
    setIsFlipped(false);
    setShowHint(false);
    setCardIndex(
      (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length,
    );
  };

  const handleHint = (e) => {
    e.stopPropagation();
    setShowHint(!showHint);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

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
          <p>{flashcards[cardIndex]?.question}</p>
          <div className="hint-section">
            <div className="hint-icon-container" onClick={(e) => handleHint(e)}>
              <Icon icon={ic_lightbulb} size={24} className="hint-icon" />
            </div>
            {showHint && (
              <p className="hint-text">{flashcards[cardIndex]?.hint}</p>
            )}
          </div>
        </div>
        <div className="card-back" key="back" onClick={handleFlip}>
          <p>{flashcards[cardIndex]?.answer}</p>
        </div>
      </ReactCardFlip>
      <div className="skip-button">
        <Icon
          className="thinLeft"
          icon={thinLeft}
          size={32}
          onClick={handlePreviousCard}
        />
        <div className="card-index">
          {cardIndex + 1}/{flashcards.length}
        </div>
        <Icon
          className="thinRight"
          icon={thinRight}
          size={32}
          onClick={handleNextCard}
        />
      </div>
    </div>
  );
};

export default Flashcard;
