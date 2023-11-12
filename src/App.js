import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Register from "./pages/register/Register";
import LoginPage from "./pages/login/LoginPage";
import Resources from "./pages/resources/Resources";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resources" element={<Resources/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
