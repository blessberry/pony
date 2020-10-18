const express = require('express');
const middlewares = require('./middlewares');
const routes = require('./routes');
const config = require('./config');

const app = express();

middlewares(app);
routes(app);
config(app);
