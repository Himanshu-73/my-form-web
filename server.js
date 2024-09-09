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

const app = express();
app.use(bodyParser.json());

// Replace this with your MongoDB connection string
const mongoURI = 'your_mongodb_connection_string';

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

const FormData = mongoose.model('FormData', FormSchema);

// POST route to handle form submissions
app.post('/submit', (req, res) => {
  const newForm = new FormData(req.body);
  newForm.save()
    .then(() => res.status(200).send('Form data saved!'))
    .catch(err => res.status(500).send('Failed to save form data'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
