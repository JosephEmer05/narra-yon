import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<div>Locations Page (Placeholder)</div>} />
          <Route path="/contact" element={<div>Contacts Page (Placeholder)</div>} />
          <Route path="/login" element={<div>Login/Registration Page (Placeholder)</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
