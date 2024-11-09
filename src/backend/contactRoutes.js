// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Import the Contact model

// Create a new contact entry
router.post('/contact', async (req, res) => {
  const {
    firstName, lastName, email, address1, address2, city,
    state, zip, phoneNumber, message, hasOrderProblem
  } = req.body;

  try {
    const newContact = new Contact({
      firstName, lastName, email, address1, address2,
      city, state, zip, phoneNumber, message, hasOrderProblem
    });
    
    await newContact.save();
    res.status(201).json({ message: 'Contact information saved successfully', newContact });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get all contact entries
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get a specific contact entry by ID
router.get('/contact/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
