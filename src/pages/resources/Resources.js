import React, { useEffect, useState } from "react";
import ALL_TOPICS from "./../../constant";
import "./Resources.css";
import Button from "../../components/button/Button";

const resources = [
  {
    title: "Exploring Various Types of HTML DOM Methods",
    topic: "HTML",
    subtopic: "Document Object Model (DOM)",
    type: "Article",
    link: "https://www.geeksforgeeks.org/explain-various-type-of-html-dom-methods/amp/",
  },
  {
    title: "Introduction to Web Development with HTML, CSS, JavaScript",
    topic: "Web Development",
    subtopic: "HTML, CSS, JavaScript",
    type: "Video",
    link: "https://www.youtube.com/watch?v=hn80mWvP-9g",
  },
  {
    title: "Learn JavaScript - Full Course for Beginners",
    topic: "JavaScript",
    subtopic: "Programming",
    type: "Video",
    link: "https://www.youtube.com/watch?v=ENrzD9HAZK4",
  },
  {
    title: "Flexbox Froggy",
    topic: "Web Development",
    subtopic: "CSS",
    type: "Game",
    link: "https://flexboxfroggy.com/",
  },
  {
    title: "Visual Hierarchy Principles with Examples",
    topic: "Design",
    subtopic: "Information Architecture",
    type: "Article",
    link: "https://xd.adobe.com/ideas/process/information-architecture/visual-hierarchy-principles-examples/",
  },
  {
    title: "Your First Week in DOM Manipulation",
    topic: "JavaScript",
    subtopic: "Document Object Model (DOM)",
    type: "Article",
    link: "https://javascript.plainenglish.io/your-first-week-in-dom-manipulation-ac4d0b2589a",
  },
  {
    title: "Design Handoff Checklist: A Comprehensive Guide",
    topic: "Design",
    subtopic: "Design for Developers",
    type: "Article",
    link: "https://www.uxpin.com/studio/blog/design-handoff-checklist/",
  },
];

function ResourceOrganizer() {
  const [formData, setFormData] = useState({
    link: "",
    title: "",
    type: "",
    topic: "",
    subtopic: "",
  });

  const [resources, setResources] = useState([]);

  console.log("form Data - ", formData);
  console.log("Resources - ", resources);

  async function handleSaveResource() {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/resources`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();
      if (data) {
        console.log("Data -", data);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error ", error);
    }
  }

  useEffect(() => {
    const getResources = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/resources`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        const data = await response.json();
        if (data) {
          setResources(data.Resources);
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error ", error);
      }
    };
    getResources();
  }, []);

  const resourcesByTopic = {};

  resources.forEach((resource) => {
    const { topic, subtopic } = resource;
    if (!resourcesByTopic[topic]) {
      resourcesByTopic[topic] = {};
    }
    if (!resourcesByTopic[topic][subtopic]) {
      resourcesByTopic[topic][subtopic] = [];
    }
    resourcesByTopic[topic][subtopic].push(resource);
  });
  return (
    <div className="resources-container">
      <div className="add-resource">
        <h2>Add Resource </h2>

        <label className="resourceInput">
          Resource Name
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
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

      <div className="resources-list">
        {Object.keys(resourcesByTopic).map((topic, idx) => (
          <div className="resources-list-topic" key={idx}>
            <h2>{topic}</h2>
            {Object.keys(resourcesByTopic[topic]).map((subtopic, idx2) => (
              <div className="resources-list-topic2" key={idx2}>
                <h3>{subtopic}</h3>
                <ul>
                  {resourcesByTopic[topic][subtopic].map((resource, idx3) => (
                    <li className="resources-subtopic" key={idx3}>
                      <strong>{resource.title}</strong> - {resource.type} (
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                      )
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div className="resourcePage">
      <h1>Resources</h1>
      <ResourceOrganizer resources={resources} />
    </div>
  );
}

export default Resources;
