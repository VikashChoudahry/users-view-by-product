const express = require('express');

const app = express();
const middleware = require('./middlewares');

app.use(express.json());
app.use(middleware.setDefaultHeaders);

require('./config/mongoose');

const apiRoutes = require('./app/controllers');

app.use('/', apiRoutes);

module.exports = app;
