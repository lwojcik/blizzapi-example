const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 8883;

const { BattleNetUtils } = require('../blizzard-battlenet-api');

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

app.get('/utils/getAllRegions', (req, res) => {
  res.json(BattleNetUtils.getAllRegions());
});

app.get('/utils/getAllRegionIds', (req, res) => {
  res.json(BattleNetUtils.getAllRegionIds());
});

app.get('/utils/getAllRegionNames', (req, res) => {
  res.json(BattleNetUtils.getAllRegionNames());
});

app.get('/utils/getRegionNameById/:regionId', (req, res) => {
  const { regionId } = req.params;
  const { paramType } = req.query.paramType || 'number';
  
  const regionIdParam = paramType === 'string' ? regionId.toString() : parseInt(regionId);

  res.json(BattleNetUtils.getRegionNameById(regionIdParam));
});

app.get('/utils/getRegionIdByName/:regionName', (req, res) => {
  const { regionName } = req.params;
  res.json(BattleNetUtils.getRegionIdByName(regionName));
});

app.get('/utils/validateRegionId/:regionId', (req, res) => {
  const { regionId } = req.params;
  res.json(BattleNetUtils.validateRegionId(regionId));
});

app.get('/utils/validateRegionName/:regionName', (req, res) => {
  const { regionName } = req.params;
  res.json(BattleNetUtils.validateRegionName(regionName));
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
