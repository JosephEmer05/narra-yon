import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './components/Home';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import './styles/App.css';
import logo from './narralogo.png';

function App() {
  return (
    <>
      <Navbar bg="white" variant="white" expand="lg" className="navbar-size">
        <div className="navbar-content">
          {/* Logo on the left */}
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-logo-container">
              <img src={logo} alt="Narra-Yon Logo" className="navbar-logo" />
            </Navbar.Brand>
          </LinkContainer>

          {/* Navbar Toggle for mobile view */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navigation Links on the right */}
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
            <Nav className="navbar-links">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/reservations">
                <Nav.Link>Reservations</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/menu">
                <Nav.Link>Menu</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link className="login-button">Log-In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<div>Log-In (Placeholder)</div>} />
      </Routes>
    </>
  );
}

export default App;
