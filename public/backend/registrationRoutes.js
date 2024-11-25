const express = require('express');
const router = express.Router();
const User = require('./User'); // Unified User model

router.post('/', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    console.log('Received registration data:', req.body);

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Save the new user
    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();

    console.log('User registered successfully:', newUser);

    res.status(201).json({ message: 'Registration successful', newUser });
  } catch (error) {
    console.error('Error during registration:', error);

    res.status(500).json({
      message: 'Server error',
      error: error.message || 'An unexpected error occurred',
    });
  }
});

module.exports = router;
