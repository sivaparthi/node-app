const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Require the package.json file to extract the version dynamically
const packageJson = require('./package.json');

// Middleware: Log each request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Endpoint 1: Returns "hwllow world"
app.get('/api', (req, res) => {
  res.send('hello world');
});

// Endpoint 2: Returns a personalized greeting
app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}! Welcome to our API.` });
});

// Endpoint 3: Returns information about the API, including version from package.json
app.get('/api/info', (req, res) => {
  res.json({
    version: packageJson.version,
    description: 'This is a sample API with multiple endpoints and features.',
    endpoints: [
      { path: '/api', description: 'Returns "hello world"' },
      { path: '/api/greet/:name', description: 'Returns a personalized greeting' },
      { path: '/api/info', description: 'Returns information about the API' }
    ]
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
