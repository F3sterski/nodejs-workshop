'use strict';

const express = require('express');
const http = require('http');
const path = require('path');

const bodyParser = require('body-parser');
const app = express();
const {sequelize} = require('./models');
const port = process.env.PORT || '3000';
const routes = require('./routes/index');
const users = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    console.error(err);
    res.sendStatus(err.status || 500);
});

const server = http.createServer(app);

sequelize.sync().then(() => {
    server.listen(port, function () {
        console.log(`Serwer wystartował na porcie ${port}`);
    });
});


