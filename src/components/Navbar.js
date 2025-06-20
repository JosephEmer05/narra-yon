import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Narra-Yon</Link>
      </div>
      <div>
        <Link to="/locations">Locations</Link>
        <Link to="/contact">Contacts</Link>
        <Link to="/login">Login/Register</Link>
        <Link to="/menu">Menu</Link>
      </div>
    </nav>
  );
}

export default Navbar;