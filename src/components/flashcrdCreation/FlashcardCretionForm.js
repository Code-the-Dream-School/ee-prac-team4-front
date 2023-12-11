import React from "react";

function CreateFlashcardForm({ flashCard, setFlashCard, handleSaveCard }) {
  return (
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
        Resources
        <input
          type="text"
          placeholder="Resources"
          value={flashCard.resources}
          onChange={(e) =>
            setFlashCard({ ...flashCard, resources: e.target.value })
          }
        />
      </label>
      <label htmlFor="" className="deckInput">
        Hint
        <input
          type="text"
          placeholder="Hint"
          value={flashCard.hint}
          onChange={(e) => setFlashCard({ ...flashCard, hint: e.target.value })}
        />
      </label>
      <button className="create-deck-button" onClick={handleSaveCard}>
        Add Card
      </button>
    </div>
  );
}

export default CreateFlashcardForm;
