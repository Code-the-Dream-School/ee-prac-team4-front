import React, { useState } from "react";
import "./Home.css";
import DeckCard from "../../components/deckCard/DeckCard";
function Home() {
  const [search, setSearch] = useState("");
  const data = [
    {
      title: "HTTP Errors",
      topic: "Intro",
      flashcards: [],
    },
    {
      title: "Context",
      topic: "React",
      flashcards: [],
    },
    {
      title: "Intro to Arrays",
      topic: "React",
      flashcards: [],
    },
    {
      title: "Function Components",
      topic: "React",
      flashcards: [],
    },

    { title: "Logical Operators", topic: "React", flashcards: [] },
    { title: "Controllers vs Routes", topic: "React", flashcards: [] },
  ];

  return (
    <>
      <div className="topBar">
        <div className="logo">
          <img src="" alt="logo" />
          <p>Flashcards</p>
        </div>

        <div className="navigation">
          <ul className="menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Topics</a>
            </li>
            <li>
              <a href="">Solutions</a>
            </li>
          </ul>
        </div>

        <div>
          <input
            type="search"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />

          <button>
            <a href="">Log In</a>
          </button>
          <button>
            <a href="">Sign In</a>
          </button>
        </div>
      </div>

      <div className="banner">
        <img src="" alt="" />
      </div>
      <div className="content">
        {data.map((elem, idx) => (
          <DeckCard deck={elem} key={idx} />
        ))}
      </div>
      <div className="footer"></div>
    </>
  );
}

export default Home;
