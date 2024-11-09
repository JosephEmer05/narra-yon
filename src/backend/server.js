const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const registrationRoutes = require('./routes/registrationRoutes');
const loginRoutes = require('./routes/loginRoutes');
const contactRoutes = require('./routes/contactRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/registration', registrationRoutes);  // Registration-related routes
app.use('/api/login', loginRoutes);                // Login-related routes
app.use('/api/contact', contactRoutes);            // Contact-related routes
app.use('/api/reservation', reservationRoutes);    // Reservation-related routes

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/narra-yon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
})
.catch(err => {
  console.log('MongoDB connection error:', err);
});
