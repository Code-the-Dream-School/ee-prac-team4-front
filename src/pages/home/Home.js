import React, { useState } from "react";
import "./Home.css";
import Navbar from "../navbar/Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <div className="banner">
        <img src="" alt="" />
      </div>
      <div className="content">
        <div>
          <h2>Flashcards</h2>
        </div>
        <div>
          <h2>Resources</h2>
        </div>
        <div>
          <h2>Quiz</h2>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
}

export default Home;
