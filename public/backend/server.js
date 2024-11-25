const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Import routes
const registrationRoutes = require('./registrationRoutes');
const loginRoutes = require('./loginRoutes');
const contactRoutes = require('./contactRoutes');
const reservationsRoutes = require('./reservationsRoutes'); // Import reservations routes

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/registration', registrationRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api', reservationsRoutes); // Add reservations route

// MongoDB Connection
const MONGO_URI = 'mongodb://localhost:27017/narra-yon'; // or your Atlas URI
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Health Check Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});
