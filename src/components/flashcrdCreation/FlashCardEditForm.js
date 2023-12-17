import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { floppyO } from "react-icons-kit/fa/floppyO";
import { exit } from "react-icons-kit/icomoon/exit";
function EditFlashCardForm({ card, handleUpdate, handleCancelEdit }) {
  let [editCardValue, setEditCardValue] = useState(card);

  const handleSave = () => {
    const bodyData = {
      question: editCardValue.question,
      answer: editCardValue.answer,
      resources: editCardValue.resources,
      hint: editCardValue.hint,
    };
    handleUpdate(card._id, bodyData);
  };

  const handleCancel = () => {
    handleCancelEdit(editCardValue._id);
  };

  return (
    <div className="flashcard">
      <div className="flashcard-answer">
        <label htmlFor="" className="">
          Question
          <input
            type="text"
            className="editInput"
            value={editCardValue.question}
            onChange={(e) =>
              setEditCardValue({
                ...editCardValue,
                question: e.target.value,
              })
            }
          />
        </label>

        <label htmlFor="">
          Answer
          <input
            type="text"
            className="editInput"
            value={editCardValue.answer}
            onChange={(e) =>
              setEditCardValue({
                ...editCardValue,
                answer: e.target.value,
              })
            }
          />
        </label>
      </div>

      <div className="flashcard-answer">
        <label htmlFor="">
          Hint
          <input
            type="text"
            className="editInput"
            value={editCardValue.hint}
            onChange={(e) =>
              setEditCardValue({
                ...editCardValue,
                hint: e.target.value,
              })
            }
          />
        </label>

        <div className="flashcard-option">
          <div onClick={handleSave}>
            <Icon icon={floppyO} size={24} style={{ color: "#87be22" }} />
          </div>
          <div onClick={handleCancel}>
            <Icon icon={exit} size={24} style={{ color: "#f2555a" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditFlashCardForm;
