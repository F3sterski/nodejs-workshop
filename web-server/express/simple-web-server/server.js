'use strict';

const htpp = require('http');
const express = require('express');
    // importujemy modul express i tworzymy aplikacje
const app = express();

// Funkcja obsługi trasy /start
app.get('/start', (req, res) => {
    res.status(200).send('Witaj');
});


app.get('/finish', (req, res) => {
    res.status(200).send('Czesc');
});

// startujemy serwer
http.createServer(app).listen(9000);
console.log('Serwer wystartował');

