'use strict';

const express = require('express');
const responseTime = require('response-time');
const http = require('http');
const bodyParser = require('body-parser');
const Logger = require('./config/logger');
const expressWinston = require('express-winston');

const app = express();

app.logger = Logger;

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(responseTime());

app.use(expressWinston.logger({
    meta: false,
    winstonInstance: Logger,
    expressFormat: true,
    statusLevel: true
}));

app.use('/', (req, res) => {
    res.sendStatus(200);
});

app.use(expressWinston.errorLogger({
    winstonInstance: Logger,
    dumpExceptions: true,
    showStack: true
}));

http.createServer(app).listen(app.get('port'), () => {
    app.logger.info("Serwer nasłuchuje na http://localhost:" + app.get('port') + "/")
});
