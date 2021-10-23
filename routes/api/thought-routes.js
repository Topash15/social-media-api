const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// GET all thoughts and create thought
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

// get thought by id, update, or delete thought
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

// adds reaction to thought
router
    .route("/:id/reactions")
    .put(addReaction)

// deletes reaction
router
    .route("/:id/:reactionId")
    .delete(deleteReaction)

module.exports = router;