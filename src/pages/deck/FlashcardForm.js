import React, { useState } from "react";
import "./Deck.css";

const CARDS = [
  {
    id: 1,
    question: "test Question1",
    answer: "test Answer",
    hint: "Hint",
  },
  {
    id: 2,
    question: "test Question2",
    answer: "test Answer",
    hint: "Hint",
  },
  {
    id: 3,
    question: "test Question 3",
    answer: "test Answer",
    hint: "Hint",
  },
  {
    id: 4,
    question: "test Question 4",
    answer: "test Answer",
    hint: "Hint",
  },
];

const FLASHCARD_FIELDS = {
  question: "",
  answer: "",
  hint: "",
  id: 0,
};
function FlashCardForm() {
  let [flashCard, setFlashCard] = useState(FLASHCARD_FIELDS);
  let [cards, setCards] = useState(CARDS);

  const handleSaveCard = () => {
    //TODO: save card on backend
    let updated = [...cards, flashCard];
    setCards(updated);

    //clear input after savings
    setFlashCard(FLASHCARD_FIELDS);
  };

  const handleDelete = (index) => {
    //TODO: delete logic on backend
    const filteredOut = cards.filter((card) => card.id !== index);
    setCards(filteredOut);
  };

  return (
    <div>
      <div className="cardContainer">
        <label htmlFor="">
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

        <label htmlFor="">
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

        <label htmlFor="">
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

        <button onClick={handleSaveCard}>Add Card</button>
      </div>

      {cards.map((card) => {
        return (
          <div key={card.id}>
            <h2>{card.question}</h2>
            <h3>{card.answer}</h3>
            <p>{card.hint}</p>

            <button onClick={() => handleDelete(card.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default FlashCardForm;
