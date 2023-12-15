import React from "react";
import ALL_TOPICS from "../constant";
import Button from "./button/Button";
import "../pages/resources/Resources.css";

function AddResourceModal({
  setOpenModal,
  formData,
  setFormData,
  handleSaveResource,
}) {
  return (
    <div className="add-resource modal-content">
      <span className="close" onClick={() => setOpenModal(false)}>
        &times;
      </span>
      <h2>Add Resource </h2>

      <label className="resourceInput">
        Resource Name
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </label>
      <label className="resourceInput">
        Resource Link
        <input
          type="text"
          value={formData.link}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
        />
      </label>
      <label htmlFor="type" className="resourceInput">
        Resource Type
        <select
          name="type"
          id="type"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option value="" disabled>
            Choose One
          </option>
          <option value="Article">Article</option>
          <option value="Video">Video</option>
          <option value="Game">Game</option>
        </select>
      </label>

      <label htmlFor="topic" className="resourceInput">
        Topic
        <select
          name="topic"
          id="mainTopic"
          onChange={(e) =>
            setFormData({
              ...formData,
              topic: e.target.value,
              subtopic: ALL_TOPICS[e.target.value][0],
            })
          }
        >
          {formData.topic ? null : <option value="">Choose One</option>}
          {Object.keys(ALL_TOPICS).map((topic, idx) => {
            return (
              <option key={idx} value={topic}>
                {topic}
              </option>
            );
          })}
        </select>
      </label>

      {formData.topic ? (
        <label htmlFor="subTopic" className="resourceInput">
          Sub Topic
          <select
            name="subTopic"
            id="subTopic"
            onChange={(e) =>
              setFormData({ ...formData, subtopic: e.target.value })
            }
          >
            <option value="">Choose One</option>
            {ALL_TOPICS[formData.topic].map((subtopic, idx) => {
              return (
                <option key={idx} value={subtopic}>
                  {subtopic}
                </option>
              );
            })}
          </select>
        </label>
      ) : null}
      <Button
        type="text"
        className="button-add-resource"
        clickHandler={handleSaveResource}
        buttonText="Add Resource"
      />
    </div>
  );
}

export default AddResourceModal;
