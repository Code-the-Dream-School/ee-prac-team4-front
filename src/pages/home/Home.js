import React, { useContext } from "react";
import DeckCard from "../../components/deckCard/DeckCard";
import Button from "../../components/button/Button";
import { AuthContext } from "../../App";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const { decks, isLoggedIn } = useContext(AuthContext);

  const publicDecks = decks.filter((deck) => deck.isPublic === true);
  const privateDecks = decks.filter((deck) => deck.isPublic === false);

  return (
    <div className="home-container">
      {/* PRIVATE DECKS */}
      {isLoggedIn && (
        <>
          <div className="deck-title">
            <h2>My Decks</h2>
            <div className="button-container">
              <Link to="/create-deck">
                <Button buttonText="new deck" className="new-deck-button" />
              </Link>
            </div>
          </div>
          <div className="decks-container">
            {privateDecks.map((deck, idx) => (
              <Link key={idx} to={`flashcards/?id=${deck._id}`}>
                <DeckCard deck={deck} />
              </Link>
            ))}
          </div>
        </>
      )}
      {isLoggedIn && !privateDecks.length && (
        <p className="no-private-decks">You haven't created any decks.</p>
      )}
      {/* PUBLIC DECKS */}
      <div className="deck-title">
        <h2>Public Decks</h2>
        {!isLoggedIn && (
          <div className="button-container">
            <Link to="/create-deck">
              <Button buttonText="new deck" className="new-deck-button" />
            </Link>
          </div>
        )}
      </div>
      <div className="decks-container">
        {publicDecks?.map((deck, idx) => (
          <Link key={idx} to={`flashcards/?id=${deck._id}`}>
            <DeckCard deck={deck} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
