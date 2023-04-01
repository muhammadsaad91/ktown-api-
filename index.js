const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/webhooks/orders/create', (req, res) => {
  console.log('Received order creation webhook:', req.body);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Webhook endpoint listening on port 3000!');
});
