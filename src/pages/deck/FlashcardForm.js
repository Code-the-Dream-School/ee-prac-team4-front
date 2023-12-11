import React, { useEffect, useState } from "react";
import "./Deck.css";
import { useParams } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { ic_edit_outline } from "react-icons-kit/md/ic_edit_outline";
import { ic_delete_outline } from "react-icons-kit/md/ic_delete_outline";

import CreateFlashcardForm from "../../components/flashcrdCreation/FlashcardCretionForm";
import EditFlashCardForm from "../../components/flashcrdCreation/FlashCardEditForm";
const FLASHCARD_FIELDS = {
  question: "",
  answer: "",
  resources: "",
  hint: "",
};

function FlashCardForm() {
  let params = useParams();
  let deckId = params.id;
  let [flashCard, setFlashCard] = useState({
    ...FLASHCARD_FIELDS,
    deck: deckId,
  });
  let [cards, setCards] = useState([]);
  let [editIds, setEditsCardIndexes] = useState([]);

  useEffect(() => {
    setFlashCard({ ...flashCard, deck: deckId });
    async function fetchData(deckId) {
      const response = await fetch(
        `http://localhost:8000/api/v1/deck/${deckId}`,
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
        setCards(deckData.deck.flashcards);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }
  }, []);

  async function handleSaveCard(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/v1/flashcard`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(flashCard),
        credentials: "include",
      });

      const card = await response.json();
      if (card.flashcard) {
        setCards([...cards, card.flashcard]);
        setFlashCard({
          ...flashCard,
          question: "",
          answer: "",
          resources: "",
          hint: "",
        });
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error ", error);
    }
  }

  async function handleDelete(id) {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/flashcard/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      if (response.ok) {
        let updatedCards = cards.filter((card) => card._id !== id);
        setCards(updatedCards);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error ", error);
    }
  }

  async function handleUpdate(id, body) {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/flashcard/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...body, deck: deckId }),
          credentials: "include",
        },
      );
      const updated = await response.json();
      if (response.ok) {
        let updatedCards = cards.filter((card) => card._id !== id);
        let editedUpdated = editIds.filter((editIndex) => editIndex !== id);
        setCards([...updatedCards, updated.flashcard]);
        setEditsCardIndexes(editedUpdated);
        console.log("editIds", editIds);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error ", error);
    }
  }
  const handleEditStart = (id) => {
    setEditsCardIndexes([...editIds, id]);
  };

  const handleCancelEdit = (id) => {
    console.log("id", id);
    let withoutEditIndex = editIds.filter((editIndex) => editIndex !== id);
    setEditsCardIndexes(withoutEditIndex);
  };
  return (
    <div>
      <CreateFlashcardForm
        flashCard={flashCard}
        setFlashCard={setFlashCard}
        handleSaveCard={handleSaveCard}
      />

      {cards.length ? (
        <div className="flashcard-list">
          {cards.map((card, i) => {
            return editIds.indexOf(card._id) > -1 ? (
              <EditFlashCardForm
                card={card}
                handleUpdate={handleUpdate}
                handleCancelEdit={handleCancelEdit}
              />
            ) : (
              <div key={card._id} className="flashcard">
                <div className="flashcard-answer">
                  <h2>{card.question}</h2>
                  <h2>{card.answer}</h2>
                </div>
                <div className="flashcard-answer">
                  <p>{card.hint}</p>
                  <div className="flashcard-option">
                    <div onClick={() => handleEditStart(card._id)}>
                      <Icon
                        icon={ic_edit_outline}
                        size={28}
                        style={{ color: "#bf7af0" }}
                      />
                    </div>
                    <div onClick={() => handleDelete(card._id)}>
                      <Icon
                        icon={ic_delete_outline}
                        size={28}
                        style={{ color: "#e32c2c" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flashcard-list">
          <div className="flashcard">
            <h3>No Flashcards in your deck</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default FlashCardForm;
