import React from "react";
import "./FlashCards.css"
function FlashCards() {


    const addFlashCard = () => {
        // add new card functionality
    }
    //in future  tags coming from db

    return (
        <div className="container">
          <h1>Flashcards</h1>
            <button onClick={addFlashCard}>Add New</button>

            <div className="content">

                <div className="tag-list">
                    <p>Tags:</p>
                    <ul className="tag-list">
                        <li><a href="">react</a></li>
                        <li><a href="">hooks</a></li>
                        <li><a href="">router</a></li>
                    </ul>
                </div>

                <div className="flashcard-container">
                    <div className="flashCard">content</div>
                </div>

            </div>
        </div>
    );
}

export default FlashCards;