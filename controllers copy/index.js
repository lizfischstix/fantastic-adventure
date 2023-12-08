const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const searchRoutes = require('./searchRoutes')

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/gamesearch', searchRoutes);
router.use('/api', apiRoutes);

module.exports = router;