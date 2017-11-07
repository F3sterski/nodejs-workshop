const router = require('express').Router();

router.use(require('./user'));

router.get('/', (req,res) => {
    res.render('welcome')
});

module.exports = router;
