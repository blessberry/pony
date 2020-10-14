require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const compress = require('compression');
const usersRoutes = require('./routes/users.js');
const emailsRoutes = require('./routes/emails.js');
const notFoundRoutes = require('./routes/notfound.js');

const app = express();

app.use(compress({ threshold: 0 }));
app.use(logger('tiny'));

app.use('/users', usersRoutes);
app.use('/emails', emailsRoutes);
app.use(notFoundRoutes);


const PORT= process.env.PORT;
app.listen(PORT);