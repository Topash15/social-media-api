const { User } = require("../models");

const UserController = {
    // get all Users
    getAllUsers(req, res) {
        User.find()
            // .populate({
            //     path: 'thoughts',
            //     select: '-__v'
            // })
            // .select('-__v')
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => {
                console.log(err)
                res.status(404).json(err)
            })
    },
    // get user by id

    // create user
    createUser(req, res) {
        User.create(req.body)
          .then((dbUserData) => res.json(dbUserData))
          .catch((err) => res.status(400).json(err));
      },

    // update user

    // delete user
}

module.exports = UserController;