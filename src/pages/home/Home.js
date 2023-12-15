import React, { useState } from "react";
import "./Home.css";
import DeckCard from "../../components/deckCard/DeckCard";
import { Link } from "react-router-dom";

function Home() {
  const data = [
    {
      title: "HTTP Errors",
      topic: "Intro",
      flashcards: [],
    },
    {
      title: "Context",
      topic: "React",
      flashcards: [],
    },
    {
      title: "Intro to Arrays",
      topic: "React",
      flashcards: [],
    },
    {
      title: "Function Components",
      topic: "React",
      flashcards: [],
    },

    { title: "Logical Operators", topic: "React", flashcards: [] },
    { title: "Controllers vs Routes", topic: "React", flashcards: [] },
  ];

  return (
    <>
      <div className="content">
        <div className="my-decks">
          <div className="my-decks-top">
            <h2 className="h2-deck-card">My Decks</h2>
            <Link className="new-deck-button" to="/create-deck">
              New deck
            </Link>
          </div>
          <div className="decks-container">
            {data.map((elem, idx) => (
              <DeckCard deck={elem} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
