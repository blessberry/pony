const usersRouter = require('./users');
const emailsRouter = require('./emails');
const tokensRouter = require('./tokens');
const othersRouter = require('./others');
const errors = require('../helpers/errors');

module.exports = (app) => {
    app.use('/users', usersRouter);
    app.use('/emails', emailsRouter);
    app.use('/tokens', tokensRouter);
    app.use('*', othersRouter);
    app.use(errors);
};