import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/home/Home";
import Resources from "./pages/resources/Resources";
import Navbar from "./components/navbar/Navbar.js";
import Flashcard from "./components/flashcard/Flashcard.js";
import About from "./pages/about/About.js";
import "./App.css";
import Deck from "./pages/deck/Deck";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [decks, setDecks] = useState([]);

  console.log("decks APP", decks);
  console.log(isLoggedIn);
  console.log("USER DATA", userData);

  const handleLogin = (userData) => {
    // remove line 21 and adjust line 22 when userdata.expiresIn is fixed
    const expiresIn =
      userData.expiresIn > 86400000 ? 86300000 : userData.expiresIn;
    const expiry = Date.now() + expiresIn;
    localStorage.setItem("expiry", expiry);
    setIsLoggedIn(true);
    setUserData(userData);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/user/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        localStorage.removeItem("expiry");
        setIsLoggedIn(false);
        setUserData({});
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        // get public decks
        const response = await fetch("http://localhost:8000/api/v1/decksAll", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const publicDecks = await response.json();

        //get private decks if logged in
        let privateUserDecks = [];
        if (isLoggedIn) {
          const response = await fetch("http://localhost:8000/api/v1/deck", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          });
          const userDecks = await response.json();
          // remove duplilcates
          privateUserDecks = userDecks.decks.filter(
            (deck) => deck.isPublic === false,
          );
        }
        setDecks([...publicDecks.decks, ...privateUserDecks]);
      } catch (error) {
        console.error("Error fetching decks:", error);
      }
    };
    // Invoke the fetchDecks function when the component mounts or when authentication status changes
    fetchDecks();
  }, [isLoggedIn]);

  useEffect(() => {
    const now = Date.now();
    const loginExpiry = localStorage.getItem("expiry");
    loginExpiry && now < loginExpiry
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, handleLogin, handleLogout, decks, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function App() {
  const [openRightNav, setOpenRightNav] = useState(false);
  return (
    <AuthProvider>
      <AppContent
        openRightNav={openRightNav}
        setOpenRightNav={setOpenRightNav}
      />
    </AuthProvider>
  );
}

function AppContent({ openRightNav }) {
  return (
    <>
      <Navbar openRightNav={openRightNav} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-deck/:id?" element={<Deck />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/flashcards" element={<Flashcard />} />
      </Routes>
    </>
  );
}

export default App;
