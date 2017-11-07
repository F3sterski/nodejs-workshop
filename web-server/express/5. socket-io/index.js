const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);


const port = process.env.port || 3000;

server.listen(port, () => {
    console.log(`Serwer nasluchuje na porcie ${port}`);
});

app.use(express.static(path.join(__dirname, 'public')));

let numUsers = 0;


