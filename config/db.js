const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  try {
    const conn = await mongoose.connect(uri);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process with a non-zero code
  }
};

module.exports = connectDB;
