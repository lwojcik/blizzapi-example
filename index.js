const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 8883;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes

app.get('/', (req, res) => {
    res.json('hello world!')
});

// starting server

module.exports = http.createServer(app).listen(port, () => {
    console.log(`API server started on port ${port}`); // eslint-disable-line no-console
});
