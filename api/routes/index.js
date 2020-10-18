const usersRoutes = require('./users');
const emailsRoutes = require('./emails');
const tokensRouter = require('./token');
const notFoundRoutes = require('./notfound');

module.exports = (app) => {
    app.use('/users', usersRoutes);
    app.use('/emails', emailsRoutes);
    app.use('/tokens', tokensRouter);
    app.use('/*', notFoundRoutes);
};