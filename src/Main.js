import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import App from './App';

function Main() {
  const location = useLocation();
  const isMenuOrReservations = location.pathname === '/menu' || location.pathname === '/reservations';

  return (
    <div className={isMenuOrReservations ? 'menu-reservations-bg' : 'default-bg'}>
      <App />
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
