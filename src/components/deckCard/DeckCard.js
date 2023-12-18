import React, { useContext } from "react";
import "./DeckCard.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../App";

const DeckCard = ({ deck }) => {
  const { isLoggedIn, userData } = useContext(AuthContext);
  const { title, topic, flashcards, createdBy } = deck;
  return (
    <div className="deck-card">
      <h3 className="h3-deck-card">{title}</h3>
      {isLoggedIn && createdBy === userData.userId ? (
        <div className="deck-card-controllers">
          <NavLink to={`/create-deck/${deck._id}`} className="deck-card-edit-btn">edit</NavLink>
        </div>
      ) : null}
      <p className="p-deck-card"> {topic}</p>
      <p className="terms-deck-card"> {flashcards.length} terms</p>
    </div>
  );
};

export default DeckCard;
