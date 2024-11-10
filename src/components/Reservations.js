import React, { useState } from 'react';
import '../styles/Reservation.css';
function Reservations() {
  const [persons, setPersons] = useState(1);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [comments, setComments] = useState('');

  const handlePersonsChange = (event) => {
    setPersons(parseInt(event.target.value));
  };

  const handleDateChange = (event) => {
    setDate(new Date(event.target.value));
  };

  const handleTimeChange = (event) => {
    setTime(new Date(`1970-01-01T${event.target.value}:00`));
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Reservation submitted:', {
      persons,
      date,
      time,
      comments,
    });
  };

  return (
    <div className="reservations-container">
    <div className="reservation-form">
      <h2>Table Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="persons">Persons:</label>
          <select id="persons" value={persons} onChange={handlePersonsChange}>
            {[...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date.toISOString().slice(0, 10)}
            onChange={handleDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time.toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
            })}
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
  );
}

export default Reservations;
