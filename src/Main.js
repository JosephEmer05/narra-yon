import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import App from './App'; // Assuming your main App component is exported from App.js

function Main() {
  const location = useLocation();

  const isMenuOrReservations = location.pathname === '/menu' || location.pathname === '/reservations';

  return (
    <div className={isMenuOrReservations ? 'menu-reservations-bg' : 'default-bg'}>
      <App />
    </div>
  );
}

export default Main;
