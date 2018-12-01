const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 8883;

const { BattleNetUtils } = require('../../blizzard-battlenet-api');

// const BnetApi = new BattleNetApi(clientID, clientSecret);

// const clientID = '123';
// const clientSecret = '456';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Applying JSON indentation */
app.set('json spaces', 2);

/** Routes */
require('./routes/index')(app);


/** Starting server */
module.exports = http.createServer(app).listen(port, () => {
  console.log(`API server started on port ${port}`); // eslint-disable-line no-console
});
