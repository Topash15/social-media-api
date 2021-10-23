const router = require('express').Router();
const apiRoutes = require('./api')

// adds prefix to api routes
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status.send('<h1>404 Error</h1>')
})

module.exports = router;