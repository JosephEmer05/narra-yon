const mongoose = require('mongoose');

// Define the Reservation schema
const reservationSchema = new mongoose.Schema({
  persons: {
    type: Number,
    required: true,
    min: 1,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/.test(v), // Ensures time format HH:MM
      message: props => `${props.value} is not a valid time format!`
    }
  },
  comments: {
    type: String,
    maxlength: 500,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Register the model with Mongoose
const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
