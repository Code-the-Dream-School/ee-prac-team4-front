import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/home/Home";
import Resources from "./pages/resources/Resources";
import FlashCards from "./pages/flashcards/FlashCards";
import Navbar from "./components/navbar/Navbar.js";
import About from "./pages/about/About.js";
import "./App.css";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUserData(userData);
    console.log("HandleLogin", userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData({});
  };

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, handleLogin, handleLogout, userData }}
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
      <Navbar openRightNav={openRightNav}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/flashcards" element={<FlashCards />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
