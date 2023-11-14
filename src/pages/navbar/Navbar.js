import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn, username }) {
  const [search, setSearch] = useState("");

  return (
    <header className="navbarContainer">
      <div className="logo">
        <img src="" alt="logo" />
      </div>

      <div className="navigation">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/solutions">Solutions</Link>
          </li>
        </ul>
      </div>

      <div className="searchBar">
        <input
          type="search"
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Only show login/sign up buttons if user is not logged in */}
      {!isLoggedIn ? (
        <div className="loginButtons">
          <Link to="/login">
            <button>Sign In</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      ) : (
        {
          /*username to be passed as props upon successful login and persist on navbar*/
        }`${username}`
      )}
    </header>
  );
}

export default Navbar;
