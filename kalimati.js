const request = require('request');
const cheerio = require('cheerio');

module.exports = () =>
  new Promise((resolve, reject) => {
    request('https://kalimatimarket.gov.np/price', (err, res, body) => {
      if (err) return reject(err);

      const $ = cheerio.load(body);
      const data = [];

      $('table tr').each((_, tr) => {
        const t = $(tr)
          .find('td')
          .map((i, td) => $(td).text().trim())
          .get();

        if (t.length === 5) {
          data.push({
            commodity: t[0],
            unit: t[1],
            min: t[2],
            max: t[3],
            avg: t[4],
          });
        }
      });

      resolve(data);
    });
  });
