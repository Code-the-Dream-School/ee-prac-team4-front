import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
import "./Navbar.css";
import logo from './logo.png';
import Button from "../../components/button/Button.js";

function Navbar() {
  const { isLoggedIn, userData, handleLogout } = useContext(AuthContext);

  return (
    <header className="navbarContainer">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" title="Go to Main Page" className="logo" />
        </Link>
      </div>
      <div className="navigation">
        <ul className="menu">
          <li>
            <Link to="/resources" className="navbar-button">Resources</Link>
          </li>
          <li>
            <Link to="/" className="navbar-button">About</Link>
          </li>
        </ul>
      </div>
      {!isLoggedIn ? (
        <div className="authButtons">
          <Link to="/login">
            <Button className="log-in-button" type="submit" buttonText="Log-in" />
          </Link>
          <Link to="/login">
            <Button className="sign-up-button" type="submit" buttonText="Sign-up" />
          </Link>
        </div>
      ) : (
        <div className="loginItems">
          {/* update when registration route returns full user data */}
          <p className="username">{userData.user?.username}</p>

          <Link to="/login" onClick={handleLogout}>
            <button className='log-out-button' title='Logout'>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
