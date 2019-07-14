require('dotenv').config();

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.API_PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Applying JSON indentation */
app.set('json spaces', 2);

/** Routes */
require('./routes/index')(app);

/** Starting server */
module.exports = http.createServer(app).listen(port, () => {
  console.log(`blizzapi-example started on port ${port}`); // eslint-disable-line no-console
});
