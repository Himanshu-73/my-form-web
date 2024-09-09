require('dotenv').config();
console.log(process.env.DB_connection);
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json()); 

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNumber: String,
});

const Student = mongoose.model('Student', studentSchema);

app.post('/submit', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send('Form data saved successfully!');
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).send('Failed to save form data');
  }
});

const PORT = process.env.PORT || 3000;app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
