const mongoose = require('mongoose');

// Define the Contact schema
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  address1: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  message: { type: String, required: true },
  hasOrderProblem: { type: Boolean, default: false },
});

// Register the model with Mongoose
const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;