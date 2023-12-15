import React, { useEffect, useState } from "react";
import "./Resources.css";
import Button from "../../components/button/Button";
import AddResourceModal from "../../components/AddResourceModal";

// const resources = [
//   {
//     title: "Exploring Various Types of HTML DOM Methods",
//     topic: "HTML",
//     subtopic: "Document Object Model (DOM)",
//     type: "Article",
//     link: "https://www.geeksforgeeks.org/explain-various-type-of-html-dom-methods/amp/",
//   },
//   {
//     title: "Introduction to Web Development with HTML, CSS, JavaScript",
//     topic: "Web Development",
//     subtopic: "HTML, CSS, JavaScript",
//     type: "Video",
//     link: "https://www.youtube.com/watch?v=hn80mWvP-9g",
//   },
//   {
//     title: "Learn JavaScript - Full Course for Beginners",
//     topic: "JavaScript",
//     subtopic: "Programming",
//     type: "Video",
//     link: "https://www.youtube.com/watch?v=ENrzD9HAZK4",
//   },
//   {
//     title: "Flexbox Froggy",
//     topic: "Web Development",
//     subtopic: "CSS",
//     type: "Game",
//     link: "https://flexboxfroggy.com/",
//   },
//   {
//     title: "Visual Hierarchy Principles with Examples",
//     topic: "Design",
//     subtopic: "Information Architecture",
//     type: "Article",
//     link: "https://xd.adobe.com/ideas/process/information-architecture/visual-hierarchy-principles-examples/",
//   },
//   {
//     title: "Your First Week in DOM Manipulation",
//     topic: "JavaScript",
//     subtopic: "Document Object Model (DOM)",
//     type: "Article",
//     link: "https://javascript.plainenglish.io/your-first-week-in-dom-manipulation-ac4d0b2589a",
//   },
//   {
//     title: "Design Handoff Checklist: A Comprehensive Guide",
//     topic: "Design",
//     subtopic: "Design for Developers",
//     type: "Article",
//     link: "https://www.uxpin.com/studio/blog/design-handoff-checklist/",
//   },
// ];

function ResourceOrganizer() {
  const [formData, setFormData] = useState({
    link: "",
    title: "",
    type: "",
    topic: "",
    subtopic: "",
  });

  const [resources, setResources] = useState([]);
  const [openModal, setOpenModal] = useState(false);
   console.log("RESOURCES", resources)

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

  async function handleSaveResource() {
    setOpenModal(false);
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
        setFormData({
          link: "",
          title: "",
          type: "",
          topic: "",
          subtopic: "",
        })
        getResources();
        console.log("Data -", data);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error ", error);
    }
  }
  useEffect(() => {
    getResources();
  }, []);

  const resourcesByTopic = {};

  resources?.forEach((resource) => {
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
      <div className="resources-title">
        <div></div>
        <h1>Resources</h1>
        <Button
          buttonText="Add Resource"
          type="text"
          className="add-resource-btn"
          clickHandler={() => setOpenModal(true)}
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
                      {resource.type}:{" "}
                     
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         <strong>{resource.title}</strong>
                      </a>
                      
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={openModal ? "modal" : ""}>
        {openModal && (
          <AddResourceModal
            setOpenModal={setOpenModal}
            formData={formData}
            setFormData={setFormData}
            handleSaveResource={handleSaveResource}
          />
        )}
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div className="resourcePage">
      <ResourceOrganizer />
    </div>
  );
}

export default Resources;
