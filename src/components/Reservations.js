import React, { useState } from 'react';

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
    setTime(new Date(event.target.value));
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle submitting the reservation data to your backend
    console.log('Reservation submitted:', {
      persons,
      date,
      time,
      comments,
    });
  };

  return (
    <div className="reservation-form">
      <h2>Table Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="persons">Persons:</label>
          <select id="persons" value={persons} onChange={handlePersonsChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
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
        </ div>
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
  );
}

export default Reservations;