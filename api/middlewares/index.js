const logger = require('morgan');
const compress = require('compression');
const basicAuth = require('../helpers/basicAuth');
const tokenAuth = require('../helpers/tokenAuth');
const findUser = require('../helpers/findUser');

module.exports = (app) => {
    app.use(logger('tiny'));
    app.use(compress({ threshold: 0 }));
    app.use(basicAuth(findUser.byCredentials));
    app.use(tokenAuth(findUser.byToken));
}