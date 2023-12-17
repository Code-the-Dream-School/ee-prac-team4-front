import React, { useContext } from "react";
import "./DeckCard.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
const DeckCard = ({ deck }) => {
  const { isLoggedIn } = useContext(AuthContext);

  const { title, topic, flashcards } = deck;

  return (
    <div className="deck-card">
      <h3 className="h3-deck-card">{title}</h3>
      {isLoggedIn ? (
        <div className="deck-card-controllers">
          <Link to={`/create-deck/${deck._id}`}>edit</Link>
        </div>
      ) : null}
      <p className="p-deck-card"> {topic}</p>
      <p className="terms-deck-card"> {flashcards.length} terms</p>
    </div>
  );
};

export default DeckCard;
