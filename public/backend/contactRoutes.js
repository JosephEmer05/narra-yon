const express = require('express');
const router = express.Router();
const Contact = require('./contact1');

// Create a new contact entry
router.post('/', async (req, res) => {
  const {
    firstName, lastName, email, address1, address2, city,
    state, zip, phoneNumber, message, hasOrderProblem
  } = req.body;

  if (!firstName || !lastName || !email || !address1 || !city || !state || !zip || !phoneNumber || !message) {
    return res.status(400).json({ message: 'All required fields must be provided' });
  }

  try {
    const newContact = new Contact({
      firstName, lastName, email, address1, address2,
      city, state, zip, phoneNumber, message, hasOrderProblem
    });

    await newContact.save();
    res.status(201).json({ message: 'Contact information saved successfully', newContact });
  } catch (error) {
    console.error('Error saving contact:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', errors: error.errors });
    }
    res.status(500).json({ message: 'Server error', error });
  }
});

// Get all contact entries with optional pagination
router.get('/', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const contacts = await Contact.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    const totalContacts = await Contact.countDocuments();

    res.status(200).json({
      total: totalContacts,
      currentPage: page,
      totalPages: Math.ceil(totalContacts / limit),
      contacts,
    });
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
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid contact ID' });
    }
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
