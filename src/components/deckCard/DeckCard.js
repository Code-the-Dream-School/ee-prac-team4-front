import "./DeckCard.css";

const DeckCard = ({ deck }) => {
  const { title, topic, flashcards } = deck;

  return (
    <div className="deck-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-topic"> {topic}</p>
      <p className="card-term"> {flashcards.length} terms</p>
    </div>
  );
};

export default DeckCard;
