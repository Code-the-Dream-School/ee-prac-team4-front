import React, { useState } from "react";
//import "./DeckCard.css";

const DeckCard = ({ deck }) => {
  const { title, topic, flashcards } = deck;

  return (
    <div className="deck-card">
      <h3>{deck.title}</h3>
      <p>Topic: {deck.topic}</p>
      <p>Number of Cards: {deck.flashcards.length}</p>
    </div>
  );
};

export default DeckCard;
