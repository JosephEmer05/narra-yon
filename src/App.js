import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './components/Home';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import './styles/App.css';
import logo from './narralogo.png';


function App() {
  return (
    <Router>
      <Navbar bg="white" variant="white" expand="lg" className="navbar-size">
  <Container>
    <div className="logo-container">
      <LinkContainer to="/">
        <Navbar.Brand>
          <img src={logo} alt="Narra-Yon Logo" />
        </Navbar.Brand>
      </LinkContainer>
    </div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/reservations">
                <Nav.Link>Reservations</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link className="login-button">Log-In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<div>Log-In (Placeholder)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
