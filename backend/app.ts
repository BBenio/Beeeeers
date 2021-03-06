const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

import {config_beers} from "./config/Config";

const routes_beers = require('./routes/Routes_Beers');
const app = express();

console.log("Begining connects");

mongoose.connect(config_beers.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Beers connects")).catch((err: any) => console.log(err));

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/beers', routes_beers);

// @ts-ignore
app.use((req, res, next) => {
    next(createError(404));
});

// @ts-ignore
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(config_beers.APP_PORT, config_beers.IP_ADDR); // Listen on port defined in environment
module.exports = app;
