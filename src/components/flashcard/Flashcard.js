import React, { useState } from "react";
import "./Flashcard.css";
import Button from "../button/Button";
import Hint from "./help-button.png";

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
              {showHint ? (
                <>
                  <span className="hint-text">Hide Hint</span>
                  
                </>
              ) : (
                <span className="hint-text"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                </span>
              )
              }
            </button>
          </h3>
          {showHint && <p className="hint-text">{mockData.hint}</p>}
          <h3> Question: </h3>
          <p>{mockData.question}</p>
          <button onClick={handleFlip} className="show-answer-button">Show Answer</button>
        </div>
      ) : (
        <div className="card-back">
          <h3> Correct answer: </h3>
          <p>{mockData.answer}</p>
          <div className="thumbs-up-down-buttons">
            <button className="success-button" onClick={() => console.log("Success") } title="Success">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
            </button>
            <button  className="failure-button" onClick={() => console.log("Failure")} title="Failure">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"/></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
