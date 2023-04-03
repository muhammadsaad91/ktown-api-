const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/webhooks/orders/create', (req, res) => {
  console.log('Received webhook:', req.body);


































  res.status(200).send('Webhook received successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
