import React, { useState } from "react";
import DeckForm from "./DeckForm";
import { useNavigate } from "react-router-dom";

const DECK_DATA = {
  id: 1,
  title: "",
  isPublic: false,
  topic: "",
  subtopic: "",
};
function DeckCreation() {
  const [deck, setDeckData] = useState(DECK_DATA);
  let navigate = useNavigate();

  const redirect = (id) => {
    //TODO: send redirect to new route
    console.log(id);
    navigate("/createCard");
  };

  return (
    <DeckForm deckData={deck} handleDeck={setDeckData} onSaveDeck={redirect} />
  );
}

export default DeckCreation;
