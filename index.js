const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Use body-parser middleware to parse incoming webhook data
app.use(bodyParser.json());

// Handle incoming webhook requests
app.post('/webhooks/orders/create', (req, res) => {
  console.log('Received webhook:', req.body);
  res.status(200).send('Webhook received successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
