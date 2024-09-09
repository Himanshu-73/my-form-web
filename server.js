const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

server.listen(3000)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

(express()).use(bodyParser.json());

// Replace this with your MongoDB connection string
const mongoURI = ' mongodb+srv://himanshu_sahu:data_storage@lelouch.oxqzh.mongodb.net/';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a schema for form data
const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  socials: String,
  driveLink: String,
});



const express = require('express');
const cors = require('cors'); // Import CORS
const mongoose = require('mongoose');
const app = express();

// Middleware to enable CORS
(express()).use(cors()); // Enable CORS for all requests
(express()).use(express.json());
(express()).use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('YOUR_MONGODB_URI', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Schema and Model
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const FormData = mongoose.model('FormData', formDataSchema);

// Handle form submission
(express()).post('/submit', async (req, res) => {
  try {
    const formData = new (mongoose.model('FormData', FormSchema))({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    await formData.save();
    res.status(200).send('Form submitted successfully');
  } catch (error) {
    res.status(405).send('Error submitting form');
  }
});

// Start the server
(express()).listen(3000, () => {
  console.log('Server running on port 3000');
});
