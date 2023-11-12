import React, { useState } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";

function Dashboard() {
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

export default Dashboard;
