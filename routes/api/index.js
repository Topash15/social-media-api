const router = require('express').Router()
const userRoutes = require('./user-routes');
// const thoughtRoutes = require('./thoughtRoutes')

// adds appropriate prefixes for routes
router.use('/users', userRoutes);
// router.user('thoughts', thoughtRoutes);

module.exports = router;
