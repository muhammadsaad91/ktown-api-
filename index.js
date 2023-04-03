const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Use body-parser middleware to parse incoming webhook data
app.use(bodyParser.json());

// Handle incoming webhook requests
app.post('/webhooks/orders/create', (req, res) => {
  console.log('Received webhook:', req.body);
  
  
  const { id, email, line_items, customer } = req.body;
  const { name, created_at } = customer;
  const { title, variant_title } = line_items[0];
  
  // add this in a json type variable 
  const data = {
    id,
    email,
    title,
    variant_title,
    name,
    created_at
  };

  console.log(data);
  
  
  res.status(200).send('Webhook received successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
