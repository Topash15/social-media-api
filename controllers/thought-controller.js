const { Thought } = require("../models");

const ThoughtController = {
    // get all Thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            // .populate({
            //     path: 'thoughts',
            //     select: '-__v'
            // })
            // .select('-__v')
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => {
                console.log(err)
                res.status(404).json(err)
            })
    },
    // get thought by id

    // create thought
    createThought({body}, res) {
        Thought.create(body)
          .then((dbThoughtData) => res.json(dbThoughtData))
          .catch((err) => res.status(400).json(err));
      },

    // update thought

    // delete thought
}

module.exports = ThoughtController;