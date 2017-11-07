const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('combined'));

// Podpinamy swoje oprogramowanie posredniczace
app.use((request, response, next) => {
    console.log(request.headers);
    next(); // Podczas tworzenia oprogramowania pośredniczącego nie zapomnij o wywołaniu next()!
});

// Podpinamy swoje oprogramowanie posredniczace
app.use((request, response, next) => {
    request.chance = Math.random()
    next(); // Podczas tworzenia oprogramowania pośredniczącego nie zapomnij o wywołaniu next()!
});

app.get('/', (request, response) => {
    response.json({
        chance: request.chance
    })
});
app.listen(3000);




