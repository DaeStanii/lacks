const router = require('express').Router();

const loginRoute = require('./login');
const signupRoute = require('./signup');
const logoutRoute = require('./logout');
const postCommentRoute = require('./postComment');
const currentUserRoute = require('./currentUser');

router.post('/login', loginRoute);
router.post('/signup', signupRoute);
router.post('/logout', logoutRoute);
router.post('/comment', postCommentRoute);
router.get('/currentuser', currentUserRoute);

module.exports = router;