module.exports = (app) => {
  app.use('/', require('./app'));
  app.use('/api', require('./app/api'));
  app.use('/utils', require('./app/utils'));
};
