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

Open [http://localhost:3000](http://localhost:3000)

## Use as module

```js
const getPrices = require('./kalimati');

getPrices().then(console.log);
```

## Response

```json
[
  {
    "commodity": "गोलभेडा ठूलो(नेपाली)",
    "unit": "के.जी.",
    "min": "रू ६०.००",
    "max": "रू ७०.००",
    "avg": "रू ६५.००"
  }
]
```

Source: https://kalimatimarket.gov.np/price
