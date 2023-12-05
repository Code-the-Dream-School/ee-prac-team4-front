import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
import "./Navbar.css";

function Navbar() {
  const { isLoggedIn, userData, handleLogout } = useContext(AuthContext);

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
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
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
          {/* update when registration route returns full user data */}
          <p className="username">{userData.user?.username}</p>
          <Link to="/">
            <button className="logoutButton" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
