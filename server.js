const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON data from the request body
app.use(bodyParser.json());

// API login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Here, you would normally perform your login authentication logic.
  // For this example, we'll use a simple check.
  if (username === 'harsh' && password === 'harsh123') {
    res.json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ error: 'Invalid credentials!' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 
