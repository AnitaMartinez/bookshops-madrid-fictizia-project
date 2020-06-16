const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const parse = require('./parse');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getDataEvents = (events) => {
  const promises = events.map((event) => {
    const promise = new Promise((resolve, reject) => {
      axios.get(event['@id'])
        .then((response) => {
          const parsedData = parse(response.data);
          resolve(parsedData[0]);
        });
    });
    return promise;
  });
  return Promise.all(promises).then((values) => values);
};

app.get('/catalogue', (req, res) => {
  axios.get('https://datos.madrid.es/egob/catalogo/206717-0-agenda-eventos-bibliotecas.json')
    .then((response) => parse(response.data))
    .then((data) => { res.json(data); })
    .catch((err) => { res.send(err); });
});

app.get('/catalogue/district', (req, res) => {
  const { query } = req._parsedUrl;

  axios.get(`https://datos.madrid.es/egob/catalogo/206717-0-agenda-eventos-bibliotecas.json?distrito_nombre=${query}`)
    .then(async (response) => {
      const data = response.data['@graph'];
      if (!data || !data.length) return res.json([]);
      const events = await getDataEvents(data);
      res.json(events);
    })
    .catch((err) => res.send(err));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
