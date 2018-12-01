module.exports = (app) => {
  app.use('/', require('./app'));
  app.use('/utils', require('./app/utils'));
};
