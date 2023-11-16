import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ currentCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);

  let mockData = {
    question: "What is our project group number?",
    answer: "4",
    hint: "The group number is a single-digit number",
    tags: ["code the dream", "practicum"],
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="card">
      {!isFlipped ? (
        <div className="card-front">
          <h3>
            <button className="hint-button" onClick={handleHint}>
              {showHint ? "Hide Hint" : "Show Hint"}
            </button>
          </h3>
          {showHint && <p className="hint-text">{mockData.hint}</p>}
          <h3> Question: </h3>
          <p>{mockData.question}</p>
          <button onClick={handleFlip}>Show Answer</button>
        </div>
      ) : (
        <div className="card-back">
          <h3> Correct answer: </h3>
          <p>{mockData.answer}</p>
          <button onClick={() => console.log("NEXT")}>Keep in my deck</button>
          <button onClick={() => console.log("Learned")}>Yeah! I got it</button>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
