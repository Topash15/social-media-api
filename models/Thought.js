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
        // TODO add getter with date formatting util
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
            // TODO add getter with date formatting util
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [ ReactionSchema ]
    }
)

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought