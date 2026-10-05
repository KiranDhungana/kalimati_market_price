# Kalimati Rate

Daily vegetable and fruit prices from [Kalimati Market](https://kalimatimarket.gov.np/price), Nepal.

## Setup

```bash
npm install
```

## Run API

```bash
npm start
```

Open [http://localhost:4020](http://localhost:4020)

## Use as module

```js
const getPrices = require('./kalimati');

getPrices().then(console.log);
```

## Response

```json
[
  {
    "commodity": "Tomato Big(Nepali)",
    "unit": "KG",
    "min": 60,
    "max": 70,
    "avg": 65
  }
]
```

Source: https://kalimatimarket.gov.np/price
