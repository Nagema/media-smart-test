const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/members', proxy('work.mediasmart.io'));

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello, I am the server' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
