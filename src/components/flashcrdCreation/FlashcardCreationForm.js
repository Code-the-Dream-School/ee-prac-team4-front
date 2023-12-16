import React from "react";

function CreateFlashcardForm({
  flashCard,
  setFlashCard,
  deck,
  handleSaveCard,
}) {
  return (
    <div className="cardContainer">
      <div className="deckInfo">
        <h2>
          <span className="deckLabel">Deck Title: </span>
          {deck.title}
        </h2>
        <h3>
          <span className="deckLabel">Topic: </span>
          {deck.topic} -&gt; {deck.subtopic}
        </h3>
      </div>
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
        Resource
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
