import React, { useContext, useState } from "react";
import "./Home.css";
import DeckCard from "../../components/deckCard/DeckCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";

function Home() {
  const data = [
    {
      _id: "657e3033c0547f91a09a0ede",
      title: "HTTP Errors",
      topic: "Intro",
      flashcards: [],
    },
    {
      _id: "657e6c305a19d32e72de9f75",
      title: "Context",
      topic: "React",
      flashcards: [],
    },
    {
      id: 3,
      title: "Intro to Arrays",
      topic: "React",
      flashcards: [],
    },
    {
      id: 4,
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
