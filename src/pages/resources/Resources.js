import React from "react"
import "./Resources.css"



const resources=[

{    
        title: "Exploring Various Types of HTML DOM Methods",
        topic: "HTML",
        subtopic: "Document Object Model (DOM)",
        type: "Article",
        link: "https://www.geeksforgeeks.org/explain-various-type-of-html-dom-methods/amp/"     
},
{      
        title: "Introduction to Web Development with HTML, CSS, JavaScript",
        topic: "Web Development",
        subtopic: "HTML, CSS, JavaScript",
        type: "Video",
        link: "https://www.youtube.com/watch?v=hn80mWvP-9g"
},
{
        title: "Learn JavaScript - Full Course for Beginners",
        topic: "JavaScript",
        subtopic: "Programming",
        type: "Video",
        link: "https://www.youtube.com/watch?v=ENrzD9HAZK4"

},
{
       title: "Flexbox Froggy",
       topic: "Web Development",
       subtopic: "CSS",
       type: "Game",
       link: "https://flexboxfroggy.com/"
},
{
       title: "Visual Hierarchy Principles with Examples",
       topic: "Design",
       subtopic: "Information Architecture",
       type: "Article",
       link: "https://xd.adobe.com/ideas/process/information-architecture/visual-hierarchy-principles-examples/"
},
{
       title: "Your First Week in DOM Manipulation",
       topic: "JavaScript",
       subtopic: "Document Object Model (DOM)",
       type: "Article",
       link: "https://javascript.plainenglish.io/your-first-week-in-dom-manipulation-ac4d0b2589a"
},
{
       title: "Design Handoff Checklist: A Comprehensive Guide",
       topic: "Design",
       subtopic: "Design for Developers",
       type: "Article",
       link: "https://www.uxpin.com/studio/blog/design-handoff-checklist/"
}
];

function ResourceOrganizer({ resources }) {
    const resourcesByTopic = {};
  
    resources.forEach(resource => {
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
        <div>
          {Object.keys(resourcesByTopic).map(topic => (
            <div key={topic}>
              <h2>{topic}</h2>
              {Object.keys(resourcesByTopic[topic]).map(subtopic => (
                <div key={subtopic}>
                  <h3>{subtopic}</h3>
                  <ul>
                    {resourcesByTopic[topic][subtopic].map(resource => (
                      <li key={resource.title}>
                        <strong>{resource.title}</strong> - {resource.type} (<a href={resource.link} target="_blank" rel="noopener noreferrer">Link</a>)
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
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
        



export default Resources
