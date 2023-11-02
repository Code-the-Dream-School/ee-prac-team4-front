import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        {/* uncomment when Login.js is ready
        <Route path='/login' element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
