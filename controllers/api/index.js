const router = require('express').Router();

const loginRoute = require('./login');
const signupRoute = require('./signup');

router.post('/login', loginRoute);
router.post('/signup', signupRoute);

module.exports = router;