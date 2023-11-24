import React from "react";
import ALL_TOPICS from "./../../constant";
import "./Deck.css";

function DeckForm({ deckData, handleDeck, onSaveDeck }) {
  const handleSaveDeck = () => {
    //TODO: back logic here
    console.log("deckData", deckData);
    //TODO: send deck data and id from db
    onSaveDeck(deckData);
  };

  return (
    <div className="deck">
      <label htmlFor="title">
        Deck Name
        <input
          type="text"
          name="title"
          placeholder="Deck Name"
          value={deckData.title}
          onChange={(e) => handleDeck({ ...deckData, title: e.target.value })}
        />
      </label>

      <label htmlFor="topic">
        Topic
        <select
          name="topic"
          id="mainTopic"
          onChange={(e) =>
            handleDeck({
              ...deckData,
              topic: e.target.value,
              subtopic: ALL_TOPICS[e.target.value][0],
            })
          }
        >
          {deckData.topic ? null : <option value="">ChooseOn</option>}
          {Object.keys(ALL_TOPICS).map((topic, idx) => {
            return (
              <option key={idx} value={topic}>
                {topic}
              </option>
            );
          })}
        </select>
      </label>

      {deckData.topic ? (
        <label htmlFor="subTopic">
          Sub Topic
          <select
            name="subTopic"
            id="subTopic"
            onChange={(e) =>
              handleDeck({ ...deckData, subtopic: e.target.value })
            }
          >
            {ALL_TOPICS[deckData.topic].map((subtopic, idx) => {
              return (
                <option key={idx} value={subtopic}>
                  {subtopic}
                </option>
              );
            })}
          </select>
        </label>
      ) : null}

      <label htmlFor="">
        Private
        <input
          type="checkbox"
          checked={deckData.isPublic}
          onChange={(e) =>
            handleDeck({ ...deckData, isPublic: !deckData.isPublic })
          }
        />
      </label>

      <button onClick={handleSaveDeck}>Create</button>
    </div>
  );
}

export default DeckForm;
