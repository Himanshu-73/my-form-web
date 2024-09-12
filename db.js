// db.js
const mongoose = require('mongoose');

const mongoURI = mongodb+srv//himanshu_sahu:data_storage@lelouch.oxqzh.mongodb.net/?retryWrites=true&w=majority&appName=lelouch;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
