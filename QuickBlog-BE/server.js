const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000; 

// Add middleware to handle JSON data
app.use(express.json());
app.use(cors());

// Define a sample API route
app.get('/api/sample', (req, res) => {
  res.json({ message: 'Backend is connected to frontend!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});