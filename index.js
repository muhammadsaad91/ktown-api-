const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Use body-parser middleware to parse incoming webhook data
app.use(bodyParser.json());

// Handle incoming webhook requests
app.post('/webhooks/orders/create', (req, res) => {
  const order = req.body;
  console.log('Received webhook for order:', order);
  
  // Extract the relevant information from the order object
  const orderId = order.id;
  const customerEmail = order.email;
  const lineItems = order.line_items;
  const totalPrice = order.total_price;

  // Do something with the extracted information, such as adding it to a database or sending a notification
  // ...

  res.status(200).send('Webhook received successfully');
});







// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
