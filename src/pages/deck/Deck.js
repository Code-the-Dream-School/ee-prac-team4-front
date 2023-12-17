import React, { useState } from "react";
import DeckForm from "./DeckForm";
import { useNavigate } from "react-router-dom";

const DECK_DATA = {
  // id: 1,
  title: "",
  isPublic: false,
  topic: "",
  subtopic: "",
  flashcards: [],
};

function Deck() {
  const [deck, setDeckData] = useState(DECK_DATA);
  let navigate = useNavigate();

  const redirect = (id) => {
    navigate("/create-card");
  };

  return (
    <DeckForm deck={deck} setDeckData={setDeckData} onSaveDeck={redirect} />
  );
}

export default Deck;
