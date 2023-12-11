import React, { useState } from "react";
import DeckForm from "./DeckForm";
import { useNavigate, useParams } from "react-router-dom";

const DECK_DATA = {
  // title: "",
  isPublic: false,
  topic: "",
  subtopic: "",
  flashcards: [],
};
function Deck() {
  const [deck, setDeckData] = useState(DECK_DATA);
  let navigate = useNavigate();

  const redirect = (id) => {
    navigate(`/create-card/${id}`);
  };

  return (
    <DeckForm deck={deck} setDeckData={setDeckData} onSaveDeck={redirect} />
  );
}

export default Deck;
