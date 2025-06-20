import React, { useState } from 'react';
import '../styles/Reservation.css';
import '../styles/App.css';

function Reservations() {
  const [persons, setPersons] = useState(1);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Store as string in YYYY-MM-DD format
  const [time, setTime] = useState('12:00'); // Default time as a string in HH:mm format
  const [comments, setComments] = useState('');

  const handlePersonsChange = (event) => {
    setPersons(parseInt(event.target.value, 10));
  };

  const handleDateChange = (event) => {
    setDate(event.target.value); // Keep date as string in YYYY-MM-DD format
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value); // Keep time as string in HH:mm format
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create reservation object
      const reservationData = {
        persons,
        date,
        time,
        comments,
      };

      // Send POST request to the backend
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit reservation');
      }

      const data = await response.json();
      console.log('Reservation submitted:', data);
      alert('Reservation submitted successfully!');
    } catch (error) {
      console.error('Error submitting reservation:', error);
      alert('An error occurred while submitting your reservation.');
    }
  };

  return (
    <div className="menu-reservations-bg">
      <div className="reservations-container">
        <div className="reservation-form">
          <h2>Table Reservation</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="persons">Persons:</label>
              <select id="persons" value={persons} onChange={handlePersonsChange}>
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={handleDateChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time:</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={handleTimeChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments:</label>
              <textarea
                id="comments"
                value={comments}
                onChange={handleCommentsChange}
              />
            </div>
            <button type="submit">Make Reservation</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
