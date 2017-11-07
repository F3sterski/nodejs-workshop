'use strict';

const router = require('express').Router();
const passport = require('passport');

router.get('/profile', passport.authenticationMiddleware(), (req, res) => {
    res.render('profile', {username: req.user.username});
});
router.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/'
}));

module.exports = router;
