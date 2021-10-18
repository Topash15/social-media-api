const { model, Schema, Type } = require("mongoose");

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            validate: [({ length }) => length <= 280, 'Must be less than 280 characters']
        },
        username: {
            type: String,
            required: true,
        },
        type: Date,
        default: Date.now(),
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    {
        toJSON: {
            getters: true
        }
    }
)

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            validate: [({ length }) => length <= 280, 'Must be less than 280 characters']
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [ ReactionSchema ]
    },
    {
        toJSON: {
            getters: true,
        }
    }
)

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought