const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define an API endpoint that returns "hellow world"
app.get('/api', (req, res) => {
  res.send('Hellow world');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
