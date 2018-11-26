const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 8883;

const { battleNetHelpers } = require('../blizzard-battlenet-api');

const helpers = battleNetHelpers;

// const BnetApi = new BattleNetApi(clientID, clientSecret);

// const clientID = '123';
// const clientSecret = '456';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Applying JSON indentation for development environment */
if (process.env.NODE_ENV !== 'production') {
  app.set('json spaces', 2);
}

// Routes

app.get('/', (req, res) => {
  res.json({ hello: 'world!' });
});

app.get('/helpers/getAllRegions', (req, res) => {
  res.json(helpers.getAllRegions());
});

app.get('/helpers/getAllRegionIds', (req, res) => {
  res.json(helpers.getAllRegionIds());
});

app.get('/helpers/getAllRegionNames', (req, res) => {
  res.json(helpers.getAllRegionNames());
});

app.get('/helpers/getRegionNameById/:regionId', (req, res) => {
  const { regionId } = req.params;
  res.json(helpers.getRegionNameById(regionId));
});

// Profile API

// app.get('/server/:server/api/profile/static/profile/:region', (req, res) => {
//     const { server, region } = req.params;
//     const static = SC2API.Profile().getStatic(server, region);

//     res.json(static);
// });

// starting server

module.exports = http.createServer(app).listen(port, () => {
  console.log(`API server started on port ${port}`); // eslint-disable-line no-console
});
