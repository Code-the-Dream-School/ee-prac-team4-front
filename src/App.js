import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/home/Home";
import Resources from "./pages/resources/Resources";
import FlashCards from "./pages/flashcards/FlashCards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/flashcards" element={<FlashCards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
