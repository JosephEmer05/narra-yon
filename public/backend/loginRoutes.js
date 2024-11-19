const express = require('express');
const router = express.Router();
const User = require('./User'); // Ensure this is the correct path

// Login Route
router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log('Login request received with email:', email);

    const user = await User.findOne({ email }); // Check for the user by email
    console.log('User found in database:', user);

    if (!user) {
      console.log('User not found in database:', email);
      return res.status(404).json({ message: `User with email ${email} not found` });
    }    

    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
