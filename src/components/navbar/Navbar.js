import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn, username }) {
  const [search, setSearch] = useState("");
  const [logout, setLogout] = useState(false);

  const handleLogout = () => {
    setLogout(true);
    console.log("User is logged out");
  };

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
      {!isLoggedIn ? (
        <div className="authButtons">
          <Link to="/login">
            <button className="logInButton">Login</button>
          </Link>
          <Link to="/register">
            <button className="registerButton">Register</button>
          </Link>
        </div>
      ) : (
        <div className="loginItems">
          <p className="username">{username}</p>
          <Link to="/">
            <button
              className="logoutButton"
              value={logout}
              onClick={handleLogout}
            >
              Logout
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
