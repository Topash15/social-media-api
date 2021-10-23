const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
{
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
        // TODO must be valid email. use mongoose validation
    },
    thoughts: [],
    friends: [],
},
{
    toJSON: {
        getters: true,
        virtuals: true,
    },
    id: false
}
)

// creates friend count virtual

UserSchema.virtual("friendCount").get(function(){
    return this.friends.length
})


// creates User model using User schema
const User = model('User', UserSchema);

// export model
module.exports = User;