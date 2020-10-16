require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const compress = require('compression');
const usersRoutes = require('./routes/users.js');
const emailsRoutes = require('./routes/emails.js');
const tokensRouter = require('./routes/token.js');
const notFoundRoutes = require('./routes/notfound.js');
const basicAuth = require('./helpers/basicAuth');
const tokenAuth = require('./helpers/tokenAuth');
const findUser = require('./helpers/findUser');

const app = express();

app.use(compress({ threshold: 0 }));
app.use(logger('tiny'));
app.use(basicAuth(findUser.byCredentials));
app.use(tokenAuth(findUser.byToken));

app.use('/users', usersRoutes);
app.use('/emails', emailsRoutes);
app.use('/tokens', tokensRouter);

app.use(notFoundRoutes);


const PORT= process.env.PORT;
app.listen(PORT);