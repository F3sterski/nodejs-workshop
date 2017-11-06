'use strict';

const http = require('http');
const express = require('express');
const app = express();
const userModel = require('./user');

app.get('/add/:first/:second', (req, res) => {
    const result = req.param.first + req.params.second;
    res.status(200).json({
        result
    });
});

app.get('/users', (req, res) => {
    const user = userModel.list();
    res.status(200).json(user);
});

app.get('/users/:id', (req, res) => {
    const userModel = require('./user');
    const user = userModel.find(req.params.id);
    res.status(200).json(user);
});

app.put('/users/:name/:age', (req, res) => {
    const userModel = require('user');
    const newUser = userModel.save(req.params.name,req.params.age);
    res.status(200).json(newUser);
});

app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    console.error(`Wystapil blad: err.message`);
    res.sendStatus(err.status || 500);
});


const server = http.createServer(app);

server.listen('3000', () => {
    console.log('Serwer nasluchuje');
});



