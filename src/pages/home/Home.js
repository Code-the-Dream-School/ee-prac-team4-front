import React, { useContext } from "react";
import DeckCard from "../../components/deckCard/DeckCard";
import Button from "../../components/button/Button";
import { AuthContext } from "../../App";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const { decks } = useContext(AuthContext);

  return (
    <div className="home-container">
      <h2 className="deck-title">My Decks</h2>
      <div className="button-container">
        <Link to="/create-deck">
          <Button buttonText="new deck" className="new-deck-button" />
        </Link>
      </div>
      <div className="decks-container">
        {decks.map((deck, idx) => (
          <Link key={idx} to={`flashcards/?id=${deck._id}`}>
            <DeckCard deck={deck} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
