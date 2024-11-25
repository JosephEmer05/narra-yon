const mongoose = require('mongoose');

// Define the Login schema
const loginSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Register the model with Mongoose
const Login = mongoose.model('Login', loginSchema);
module.exports = Login;