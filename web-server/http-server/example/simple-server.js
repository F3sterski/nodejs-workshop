const http = require('http');
const fs = require('fs');
const server = http.createServer();
const data = {
    'name': 'Lukasz'
};

server.on('request', (req, res) => {
    switch (req.url) {
        case '/api':
            res.writeHead(200, {'Contet-Type': 'application/json'});
            res.end(JSON.stringify(data));
            break;
        case '/home':
        case '/about':
            res.writeHead(200, {'Contet-Type': 'text/plain'});
            res.end(fs.readFileSync(`./${req.url}.html`));
            break;
        case '/':
            res.writeHead(301, {'Location': '/home'});
            res.end();
            break;
        default:
            res.writeHead(404);
            res.end();
    }
});

server.listen(8080);
