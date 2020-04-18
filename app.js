const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./app/routes/index');
const sensorsRouter = require('./app/routes/sensors/router');
const actuatorsRouter = require('./app/routes/actuators/router');

const app = express();
const apiPrefix = '/api/minigrowl/v1';

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(apiPrefix, indexRouter);
app.use(apiPrefix, sensorsRouter);
app.use(apiPrefix, actuatorsRouter);

module.exports = app;
