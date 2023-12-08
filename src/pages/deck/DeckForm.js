import React from "react";
import ALL_TOPICS from "./../../constant";
import "./Deck.css";

function DeckForm({ deck, setDeckData, onSaveDeck }) {


    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTRjMWUzMTczNGExMjg4NTJmMWY3OGQiLCJpYXQiOjE3MDE1NDM0ODIsImV4cCI6MTcwMTYyOTg4Mn0.n98iQmGFSe1ChRgAXnluW5b5iuPzM7lu6qxhKDqVBP8"
    async function handleSaveDeck (e) {
          e.preventDefault();
          try {
              const response = await fetch(`http://localhost:8000/api/v1/deck`, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${token}`
                  },
                  body: JSON.stringify(deck),
              });

              const data = await response.json();
                console.log(data)
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
  };

  return (
    <div className="deck">
      <label htmlFor="title">
        Deck Name
        <input
          type="text"
          name="title"
          placeholder="Deck Name"
          value={deck.title}
          onChange={(e) => setDeckData({ ...deck, title: e.target.value })}
        />
      </label>

      <label htmlFor="topic">
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
        <label htmlFor="subTopic">
          Sub Topic
          <select
            name="subTopic"
            id="subTopic"
            onChange={(e) =>
                setDeckData({ ...deck, subtopic: e.target.value })
            }
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

      <label htmlFor="">
        Private
        <input
          type="checkbox"
          checked={deck.isPublic}
          onChange={(e) =>
              setDeckData({ ...deck, isPublic: !deck.isPublic })
          }
        />
      </label>

      <button onClick={handleSaveDeck}>Create</button>
    </div>
  );
}

export default DeckForm;
