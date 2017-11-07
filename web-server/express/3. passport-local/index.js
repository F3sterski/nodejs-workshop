'use strict';

const path = require('path');

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const port = process.env.PORT || 3000;

const config = require('./config');
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

require('./config/authentication').init(app);

app.use(session({
    store: new RedisStore({
        url: config.redisStore.url
    }),
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.engine('.hbs', exphbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use(require('./routes'));

app.listen(port, (err) => {
    if (err) {
        throw err;
    }

    console.log(`Serwer nasluchuje na porcie ${port}`);
});
