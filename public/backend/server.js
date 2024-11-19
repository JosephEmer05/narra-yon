const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Import routes
const registrationRoutes = require('./registrationRoutes');
const loginRoutes = require('./loginRoutes');
const contactRoutes = require('./contactRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/registration', registrationRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/contact', contactRoutes);

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/narra-yon';
mongoose.connect(mongoURI, {
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

// Optional: Add a route to check if the server is running
app.get('/', (req, res) => {
  res.send('API is running...');
});