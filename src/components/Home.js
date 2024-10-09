import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/your-destination-route'); // Use navigate to redirect
  };
  return (
    <div className="home-container">
      <div style={{ marginTop: '-150px' }}>
        <img 
          src={require('./welcomepage.png')}
          alt="Welcome to Narra-Yon"
        />
      </div>
      <div 
        className="home-buttons" 
        style={{ marginTop: '-200px', display: 'center', justifyContent: 'center', marginRight: "-23px"}} // Center the buttons
      >
        <button 
          className="book-btn"
          onClick={() => navigate('/reservations')}
        >
          Book a table
        </button>
        <button 
          className="menu-btn"
          style={{marginLeft: '10px'}} // Add margin-left for spacing
          onClick={() => navigate('/menu')}
        >
          View menu
        </button>
      </div>
    </div>
  );
}

export default Home;