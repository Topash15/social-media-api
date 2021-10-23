const { User } = require("../models");

const UserController = {
  // get all Users
  getAllUsers(req, res) {
    console.log("getting users");
    User.find({})
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json(err);
      });
  },
  // get user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => {
        // if no user found, send 404
        if (!dbUserData) {
          res.status(404).json({ message: "No users found with that id." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json(err);
      });
  },

  // create user
  createUser(req, res) {
    console.log("creating user");
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },

  // update user
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "User not found" });
          return;
        }
        res.json(dbUserData)
      }
    )
    .catch((err) => res.status(400).json(err))
  },

  // delete user
  deleteUser({ params }, res) {
      User.findOneAndDelete({ _id: params.id }, { new: true })
      .then((dbUserData) => {
        //return 404 if no user found
        if(!dbUserData) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.json(dbUserData)
      })
      .catch(err)
  }
};

module.exports = UserController;