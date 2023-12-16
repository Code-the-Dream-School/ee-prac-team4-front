import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/home/Home";
import Resources from "./pages/resources/Resources";
import Navbar from "./components/navbar/Navbar.js";
import "./App.css";
import Deck from "./pages/deck/Deck";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [decks, setDecks] = useState([]);
  console.log("decks", decks);
  console.log(isLoggedIn);

  const handleLogin = (userData) => {
    const expiry = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem("expiry", expiry);
    setIsLoggedIn(true);
    setUserData(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("expiry");
    setIsLoggedIn(false);
    setUserData({});
  };

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        if (isLoggedIn) {
          const response = await fetch("http://localhost:8000/api/v1/deck", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          });
          const userDecks = await response.json();
          console.log("user decks", userDecks);
          const privateUserDecks = userDecks.decks.filter(
            (deck) => deck.isPublic === false,
          );
          setDecks([...decks, ...privateUserDecks]);
        } else {
          const response = await fetch(
            "http://localhost:8000/api/v1/decksAll",
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            },
          );
          const publicDecks = await response.json();
          setDecks(publicDecks.decks);
        }
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
        <Route path="/resources" element={<Resources />} />
        <Route path="/create-deck" element={<Deck />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
}

export default App;
