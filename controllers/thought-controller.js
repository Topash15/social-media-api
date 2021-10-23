const { Thought, User } = require("../models");

const ThoughtController = {
    // get all Thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => {
                console.log(err)
                res.status(404).json(err)
            })
    },
    // get thought by id
    getThoughtById({params}, res) {
        Thought.findOne({ _id: params.id })
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => {
                console.log(err)
                res.status(404).json(err)
            })
    },

    // create thought
    createThought({body}, res) {
        Thought.create(body)
            .then(({ _id, username}) => {
                return User.findOneAndUpdate(
                    { username: username},
                    { $push: { thoughts: _id }},
                    { new: true }
                )
            })
          .then((dbUserData) => {
              if(!dbUserData){
                  res.status(404).json({ message: "User not found"})
                  return
              }
              res.json(dbUserData)
          })
          .catch((err) => res.status(400).json(err));
      },

    // update thought
    updateThought( { params, body}, res) {
        Thought.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true }
        )
        .then((dbUserData) => {
            if(!dbUserData){
                res.status(404).json({ message: "User not found"})
                return
            }
            res.json(dbUserData)
        })
        .catch((err) => res.status(400).json(err))
    },

    // delete thought
    deleteThought( { params }, res) {
        Thought.findOneAndDelete(
            { _id: params.id },
            { new: true }
        )
        .then((dbUserData) => {
            if(!dbUserData){
                res.status(404).json({ message: "Thought not found"})
                return
            }
            res.json(dbUserData)
        })
        .catch((err) => res.status(400).json(err))
    }
}

module.exports = ThoughtController;