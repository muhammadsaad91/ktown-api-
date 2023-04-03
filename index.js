const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/webhooks/orders/create', (req, res) => {
  console.log('Received webhook:', req.body);

  // i want this to added in variable variant title created_at name email 
  const data=[req.body];
  console.log(data);


 

































  res.status(200).send('Webhook received successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
