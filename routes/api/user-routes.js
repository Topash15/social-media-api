const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// GET all user and create User
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)


// Get single user, update user, or delete user
router
    .route('/:username')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;