const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// GET all thoughts and create thought
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

// get thought by id, update, or delete thought
router.
    route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)


module.exports = router;