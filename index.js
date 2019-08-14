if (process.env.NODE_ENV === 'development') require('dotenv').config();
const app = require('./src/app');
const port = process.env.API_PORT || 8080;

app.listen(port, () => {
  console.log(`blizzapi-example listening on ${port}!`);
});
