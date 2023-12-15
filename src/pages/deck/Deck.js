import React, { useState } from "react";
import DeckForm from "./DeckForm";
import { useParams } from "react-router-dom";
import FlashcardForm from "./FlashcardForm";

const DECK_DATA = {
  title: "",
  isPublic: false,
  topic: "",
  subtopic: "",
  flashcards: [],
};

function Deck() {
  const { id } = useParams();
  const [deck, setDeckData] = useState(DECK_DATA);
  const [hasDeckCheck, setHasDeckCheck] = useState(!!id); //convert to boolean if we have id
  const [deckId, setDeckId] = useState(id);

  const handleDeckId = (id) => {
    if (id) {
      setDeckId(id);
      setHasDeckCheck(true);
    }
  };

  return !hasDeckCheck ? (
    <DeckForm deck={deck} setDeckData={setDeckData} onSaveDeck={handleDeckId} />
  ) : (
    <FlashcardForm deckId={deckId} deck={deck} />
  );
}

export default Deck;
