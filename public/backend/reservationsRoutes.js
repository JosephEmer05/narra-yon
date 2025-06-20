const express = require('express');
const router = express.Router();
const Reservation = require('./reservations'); // Import the Reservation model

// Create a new reservation
router.post('/reservations', async (req, res) => {
  const { persons, date, time, comments } = req.body;

  try {
    // Ensure date is a valid ISO string (if it isn't, fix it)
    const reservationDate = new Date(date);

    // Create a new reservation object
    const newReservation = new Reservation({
      persons,
      date: reservationDate,
      time,
      comments,
    });

    // Save the reservation to MongoDB
    await newReservation.save();

    // Respond with the success message
    res.status(201).json({ message: 'Reservation created successfully', newReservation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get all reservations
router.get('/reservations', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get a specific reservation by ID
router.get('/reservations/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) return res.status(404).json({ message: 'Reservation not found' });

    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
