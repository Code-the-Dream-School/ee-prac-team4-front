import React from "react";
import ALL_TOPICS from "./../../constant";
import "./Deck.css";

function DeckForm({ deck, setDeckData, onSaveDeck }) {
  async function handleSaveDeck(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/v1/deck`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deck),
        credentials: "include",
      });

      const data = await response.json();
      console.log(data);
      if (data) {
        // navigate("/");
      }
      if (data.error || data.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }

    console.log("deckData", deck);
    //TODO: send deck data and id from db
    onSaveDeck(deck);
  }

  return (
    <div className="deck">
      <label className="deckInput" htmlFor="title">
        Deck Name
        <input
          type="text"
          name="title"
          placeholder="Deck Name"
          value={deck.title}
          onChange={(e) => setDeckData({ ...deck, title: e.target.value })}
        />
      </label>

      <label htmlFor="topic" className="deckInput">
        Topic
        <select
          name="topic"
          id="mainTopic"
          onChange={(e) =>
            setDeckData({
              ...deck,
              topic: e.target.value,
              subtopic: ALL_TOPICS[e.target.value][0],
            })
          }
        >
          {deck.topic ? null : <option value="">ChooseOn</option>}
          {Object.keys(ALL_TOPICS).map((topic, idx) => {
            return (
              <option key={idx} value={topic}>
                {topic}
              </option>
            );
          })}
        </select>
      </label>

      {deck.topic ? (
        <label htmlFor="subTopic" className="deckInput">
          Sub Topic
          <select
            name="subTopic"
            id="subTopic"
            onChange={(e) => setDeckData({ ...deck, subtopic: e.target.value })}
          >
            {ALL_TOPICS[deck.topic].map((subtopic, idx) => {
              return (
                <option key={idx} value={subtopic}>
                  {subtopic}
                </option>
              );
            })}
          </select>
        </label>
      ) : null}

      <label htmlFor="" className="checkBox">
        Private
        <input
          type="checkbox"
          checked={deck.isPublic}
          onChange={(e) => setDeckData({ ...deck, isPublic: !deck.isPublic })}
        />
      </label>

      <button className="button" onClick={handleSaveDeck}>
        Create
      </button>
    </div>
  );
}

export default DeckForm;
