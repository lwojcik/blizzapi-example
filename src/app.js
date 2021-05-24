const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Applying JSON indentation */
app.set('json spaces', 2);

/** Routes */
require('./routes/index')(app);

/** Starting server */
module.exports = app;