import React, { useState } from "react";
import "./DeckCard.css";

const DeckCard = ({ deck }) => {
  const { title, topic, flashcards } = deck;

  return (
    <div className="deck-card">
      <h3 className="h3-deck-card">{title}</h3>
      <p className="p-deck-card"> {topic}</p>
      <p className="terms-deck-card"> {flashcards.length} terms</p>
    </div>
  );
};

export default DeckCard;
