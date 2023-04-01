const express = require('express');
const bodyParser = require('body-parser');
const Shopify = require('shopify-api-node');

// Set up Shopify API credentials
const shopify = new Shopify({
  shopName: 'k-town-rentals.myshopify.com',
  apiKey: '319cc2f4fb20d2301c40880cf60132ed',
  password: '3d2d61203a79e8a427bc2611b1c4944e'
});

// Create Express app and configure middleware
const app = express();
app.use(bodyParser.json());

// Set up webhook endpoint for order creation events
app.post('/webhooks/orders/create', async (req, res) => {
  const order = req.body;
  console.log('Received order creation webhook:', order);

  // Retrieve order details from Shopify API
  const orderDetails = await shopify.order.get(order.id);

  // Perform additional actions with order details here
  // such as adding the order to Google Cloud Calendar

  res.sendStatus(200);
});

// Start the server
app.listen(3000, () => {
  console.log('Webhook endpoint listening on port 3000!');
});
