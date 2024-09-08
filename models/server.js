const express = require('express');
const mongoose = require('mongoose');
const Form = require('./models/Form');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://<your-mongo-db-url>', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// API endpoint for form submission
app.post('/submit', async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(200).send('Form submitted successfully');
  } catch (error) {
    res.status(500).send('Error submitting form');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const Form = require('./models/Form');
const connectDB = require('./db');
