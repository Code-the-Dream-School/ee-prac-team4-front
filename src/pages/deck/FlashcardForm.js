import React, { useEffect, useState } from "react";
import "./Deck.css";
import { useParams } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { ic_edit_outline } from "react-icons-kit/md/ic_edit_outline";
import { ic_delete_outline } from "react-icons-kit/md/ic_delete_outline";

const FLASHCARD_FIELDS = {
  question: "",
  answer: "",
  resources: "",
  hint: "",
};
function FlashCardForm() {
  let params = useParams();
  let [flashCard, setFlashCard] = useState(FLASHCARD_FIELDS);
  let [cards, setCards] = useState([]);

  useEffect(() => {
    let deckId = params.id;
    setFlashCard({ ...flashCard, deck: deckId });
  }, [cards]);
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
      if (flashCard) {
        setCards([...cards, card.flashcard]);
        setFlashCard(FLASHCARD_FIELDS);
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

  return (
    <div>
      <div className="cardContainer">
        <label htmlFor="" className="deckInput">
          Question
          <input
            type="text"
            placeholder="Type your question"
            value={flashCard.question}
            onChange={(e) =>
              setFlashCard({ ...flashCard, question: e.target.value })
            }
          />
        </label>

        <label htmlFor="" className="deckInput">
          Answer
          <input
            type="text"
            placeholder="Answer"
            value={flashCard.answer}
            onChange={(e) =>
              setFlashCard({ ...flashCard, answer: e.target.value })
            }
          />
        </label>

        <label htmlFor="" className="deckInput">
          Hint
          <input
            type="text"
            placeholder="Hint"
            value={flashCard.hint}
            onChange={(e) =>
              setFlashCard({ ...flashCard, hint: e.target.value })
            }
          />
        </label>
        <button className="create-deck-button" onClick={handleSaveCard}>
          Add Card
        </button>
      </div>

      {cards.length ? (
        <div className="flashcard-list">
          {cards.map((card) => {
            return (
              <div key={card._id} className="flashcard">
                <div className="flashcard-answer">
                  <h2>{card.question}</h2>
                  <h2>{card.answer}</h2>
                </div>
                <div className="flashcard-answer">
                  <p>{card.hint}</p>
                  <div className="flashcard-option">
                    {/*<div>*/}
                    {/*  <Icon*/}
                    {/*    icon={ic_edit_outline}*/}
                    {/*    size={28}*/}
                    {/*    style={{ color: "#bf7af0" }}*/}
                    {/*  />*/}
                    {/*</div>*/}
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
