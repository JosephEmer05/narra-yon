import React from 'react';
import { useNavigate } from 'react-router-dom';
import welcomeImage from './welcomepage.png';

function Home() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <div style={{ marginTop: '-150px' }}>
        <img 
          src={welcomeImage}
          alt="Welcome to Narra-Yon"
        />
      </div>
      <div 
        className="home-buttons" 
        style={{
          marginTop: '-200px',
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: '-23px'
        }}
      >
        <button 
          className="book-btn"
          onClick={() => handleClick('/reservations')}
        >
          Book a table
        </button>
        <button 
          className="menu-btn"
          style={{ marginLeft: '10px' }}
          onClick={() => handleClick('/menu')}
        >
          View menu
        </button>
      </div>
    </div>
  );
}

export default Home;
