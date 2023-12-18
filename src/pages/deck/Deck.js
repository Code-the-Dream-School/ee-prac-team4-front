import React, { useEffect, useState } from "react";
import DeckForm from "./DeckForm";
import { Link, useParams } from "react-router-dom";
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
  const [cards, setCards] = useState([]);
  const [hasDeckCheck, setHasDeckCheck] = useState(!!id); //convert to boolean if we have id
  const [deckId, setDeckId] = useState(id);

  useEffect(() => {
    if (id) {
      setDeckId(id);
      const fetchData = async (id) => {
        const response = await fetch(
          `http://localhost:8000/api/v1/deck/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          },
        );
        const deckData = await response.json();
        if (response.ok) {
          setDeckData({
            ...deck,
            title: deckData.deck.title,
            topic: deckData.deck.topic,
            subtopic: deckData.deck.subtopic,
          });
          setCards(deckData.deck.flashcards);
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      };
      fetchData(id);
    }
  }, []);

  const handleDeckId = (id) => {
    if (id) {
      setDeckId(id);
      setHasDeckCheck(true);

      (async (id) => {
        try {
          const response = await fetch(
            `http://localhost:8000/api/v1/deck/${id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
            },
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const deckData = await response.json();
          setCards(deckData.deck.flashcards);
        } catch (error) {
          console.error("Error fetching deck data:", error.message);
        }
      })(id);
    }
  };

  return (
    <div>
      <Link to="/" className="navbar-button">
        <li>Home</li>
      </Link>
      {!hasDeckCheck ? (
        <DeckForm
          deck={deck}
          setDeckData={setDeckData}
          onSaveDeck={handleDeckId}
        />
      ) : (
        <FlashcardForm
          deckId={deckId}
          deck={deck}
          cards={cards}
          setCards={setCards}
        />
      )}
    </div>
  );
}

export default Deck;
