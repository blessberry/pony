require('dotenv').config();
const express = require('express');
const usersRoutes = require('./routes/users.js');
const emailsRoutes = require('./routes/emails.js');

const app = express();

app.use('/users', usersRoutes);
app.use('/emails', emailsRoutes);

const PORT= process.env.PORT;
app.listen(PORT);