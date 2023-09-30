const router = require('express').Router();

//const apiRoutes = require('./api');
const homeRoutes = require('./home');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
//router.use('/api', apiRoutes);
router.use('/api', apiRoutes);

module.exports = router;