const router = require('express').Router();

const loginRoute = require('./login');
const signupRoute = require('./signup');
const logoutRoute = require('./logout');

router.post('/login', loginRoute);
router.post('/signup', signupRoute);
router.post('/logout', logoutRoute);

module.exports = router;