import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
import "./Navbar.css";
import logo from './logo.png';
import logoHovered from './logo2.png';
import Button from "../../components/button/Button.js";

function Navbar({ openRigthNav, setIsOpenRightNav }) {
  const { isLoggedIn, userData, handleLogout } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);
  const [checkbox, checkCheckbox] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        checkCheckbox(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCheckboxClick = (event) => {
    event.stopPropagation(); 
    checkCheckbox(!checkbox);
  };

  const handleXButtonClick = () => {
    checkCheckbox(false);
  };

  const handleNavbarClick = () => {
    checkCheckbox(!checkbox);
  };

  return (
    <div className={`nav ${checkbox ? 'open' : ''}`} onClick={handleNavbarClick}>
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
          type='checkbox' 
          id='hamburger-checkbox' 
          name='hamburger-checkbox' 
          checked={checkbox} 
          onChange={handleCheckboxClick}
          className={`hamburger ${openRigthNav ? 'menu' : 'hamburger'}`}
        />
      </label>
      <aside 
        className={`sidebar ${checkbox ? 'open' : ''}`}
        ref={sidebarRef}
      >
        <div className="top-bar">
          <button onClick={handleXButtonClick} style={{ display: 'none' }}>X</button>
          <div onClick={handleXButtonClick} className="clickable-div"></div>
        </div>
        <ul className="right-nav-ul">
          <div className="buttons">
            <div className="first-group">
            <Link to="/resources" className="navbar-button" >
              <li>
                Resources
              </li>
            </Link>
            <Link to="/" className="navbar-button">
              <li>
                About
              </li>
            </Link>
            </div>
            
            <div className="second-group">
              {!isLoggedIn ? (
                <div className="authButtons">
                  <Link to="/login" className="link-auth">
                    <Button className="log-in-button" type="submit" buttonText="Login" />
                  </Link>
                  <Link to="/register" className="link-auth">
                    <Button className="sign-up-button" type="submit" buttonText="Register" />
                  </Link>
                </div>
              ) : (
                <div className="loginItems">
                  {/* update when registration route returns full user data */}
                  <p className="username">{userData.user?.username}</p>
                  <Link to="/login" onClick={() => { handleLogout() }} className="login-button">
                    <button className='log-out-button' title='Logout' onClick={() => console.log('Button 3 clicked')}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
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