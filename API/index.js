const express = require('express');
const getPrices = require('../kalimati');

const app = express();

app.get('/', (req, res) => {
  getPrices()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.listen(3000, () => console.log('http://localhost:3000'));
