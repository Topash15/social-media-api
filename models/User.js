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
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    thoughts: [ 
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
     ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
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