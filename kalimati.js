const request = require('request');
const cheerio = require('cheerio');

const num = (t) => parseFloat(String(t).replace(/[^\d.]/g, '')) || 0;

module.exports = () =>
  new Promise((resolve, reject) => {
    const jar = request.jar();

    request({ url: 'https://kalimatimarket.gov.np/lang/en', jar }, (langErr) => {
      if (langErr) return reject(langErr);

      request({ url: 'https://kalimatimarket.gov.np/price', jar }, (err, res, body) => {
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
              min: num(t[2]),
              max: num(t[3]),
              avg: num(t[4]),
            });
          }
        });

        resolve(data);
      });
    });
  });
