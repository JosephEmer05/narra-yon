import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Narra-Yon</h1>
      <div style={{ marginTop: '20px' }}>
        <img 
          src="https://via.placeholder.com/400x300.png?text=Placeholder+Image" 
          alt="Placeholder"
        />
      </div>
      <div className="home-buttons">
        <button 
          className="book-btn"
          onClick={() => alert('Placeholder for booking page')}
        >
          Book a table
        </button>
        <button 
          className="menu-btn"
          onClick={() => alert('Placeholder for viewing the menu')}
        >
          View menu
        </button>
      </div>
    </div>
  );
}

export default Home;
