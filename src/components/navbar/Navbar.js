import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
import "./Navbar.css";
import logo from "./logo.png";
import logoHovered from "./logo2.png";
import Button from "../../components/button/Button.js";

function Navbar({ openRigthNav }) {
  const { isLoggedIn, userData, handleLogout } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const sidebarRef = useRef(null);

  const handleCheckboxClick = (event) => {
    event.stopPropagation();
    setCheckbox(!checkbox);
  };

  const handleSidebarClick = () => {
    setCheckbox(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={`nav ${checkbox ? "open" : ""}`}>
      <div className="logo">
        <Link to="/">
          <img
            src={isHovered ? logoHovered : logo}
            alt="logo"
            title="Go to Main Page"
            className="logo"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Link>
      </div>

      <label className="hamburger-menu">
        <input
          type="checkbox"
          id="hamburger-checkbox"
          name="hamburger-checkbox"
          checked={checkbox}
          onChange={handleCheckboxClick}
          className={`hamburger ${openRigthNav ? "menu" : "hamburger"}`}
        />
      </label>
      <aside
        className={`sidebar ${checkbox ? "open" : ""}`}
        ref={sidebarRef}
        onClick={handleSidebarClick}
      >
        <ul className="right-nav-ul">
          <div className="buttons">
            <div className="first-group">
              <Link to="/resources" className="navbar-button">
                <li>Resources</li>
              </Link>
              <Link to="/about" className="navbar-button">
                <li>About</li>
              </Link>
            </div>

            <div className="second-group">
              {!isLoggedIn ? (
                <div className="authButtons">
                  <Link to="/login" className="link-auth">
                    <Button
                      className="log-in-button"
                      type="submit"
                      buttonText="Login"
                    />
                  </Link>
                  <Link to="/register" className="link-auth">
                    <Button
                      className="sign-up-button"
                      type="submit"
                      buttonText="Register"
                    />
                  </Link>
                </div>
              ) : (
                <div className="loginItems">
                  <p className="username">Hello, {userData.user?.username}!</p>
                  <Link
                    to="/login"
                    onClick={() => {
                      handleLogout();
                    }}
                    className="login-button"
                  >
                    <button
                      className="log-out-button"
                      title="Logout"
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </ul>
      </aside>
    </div>
  );
}

export default Navbar;
