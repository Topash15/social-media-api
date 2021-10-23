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


module.exports = router;