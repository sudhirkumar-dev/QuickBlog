const express = require('express');
require('dotenv').config();
const cors = require('cors')
const app = express();

let port = process.env.port;

// Add middleware to handle JSON data
app.use(express.json());
app.use(cors());

// Define a sample API route
app.get('/api/sample', (req, res) => {
  res.json({ message: 'Backend is connected to frontend!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});