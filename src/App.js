import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/home/Home";
import Resources from "./pages/resources/Resources";
import FlashCards from "./pages/flashcards/FlashCards";
import Navbar from "./components/navbar/Navbar.js";
import "./App.css";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [decks, setDecks] = useState([]);


  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUserData(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData({});
  };

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        if (isLoggedIn) {
          const response = await fetch("http://localhost:8000/api/v1/deck", {
            headers: {
            credentials: 'true'
            },
          });
          const userDecks = await response.json();
          setDecks(userDecks);
        } else {
          const response = await fetch("http://localhost:8000/api/v1/decksAll");
          const publicDecks = await response.json();
          setDecks(publicDecks);
        }
      } catch (error) {
        console.error("Error fetching decks:", error);
      }
    };

    // Invoke the fetchDecks function when the component mounts or when authentication status changes
    fetchDecks();
  }, [isLoggedIn, userData]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, handleLogin, handleLogout, decks, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/flashcards" element={<FlashCards />} />
      </Routes>
    </>
  );
}

export default App;


