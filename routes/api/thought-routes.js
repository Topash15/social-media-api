const router = require('express').Router();
const {
    getAllThoughts,
    createThought
} = require('../../controllers/thought-controller');

// GET all thoughts and create thought
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)


module.exports = router;