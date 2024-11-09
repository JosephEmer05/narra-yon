// routes/registrationRoutes.js
const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration'); // Import the Registration model

// Registration Route
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    // Check if email already exists
    const existingUser = await Registration.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create new user
    const newUser = new Registration({ firstName, lastName, email, password });
    await newUser.save();

    // Successful registration
    res.status(201).json({ message: 'Registration successful', newUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
