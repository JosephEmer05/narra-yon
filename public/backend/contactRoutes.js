const express = require('express');
const router = express.Router();
const Contact = require('./contact1');

// Create a new contact entry
router.post('/', async (req, res) => {
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
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get all contact entries
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get a specific contact entry by ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });

    res.status(200).json(contact);
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;