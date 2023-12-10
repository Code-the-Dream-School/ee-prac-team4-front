import React, { useState } from "react";
import DeckForm from "./DeckForm";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";

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
  let params = useParams();
  const redirect = (id) => {
    navigate(`/create-card/${id}`);
  };

  return (
    <DeckForm deck={deck} setDeckData={setDeckData} onSaveDeck={redirect} />
  );
}

export default Deck;
