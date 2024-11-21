
const express = require('express');
const router = express.Router();
const Reservation = require('./reservations'); // Import the Reservation model

// Create a new reservation
router.post('/reservations', async (req, res) => {
  const { persons, date, time, comments } = req.body;

  try {
    const newReservation = new Reservation({ persons, date, time, comments });
    await newReservation.save();
    res.status(201).json({ message: 'Reservation created successfully', newReservation });
  } catch (error) {
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
