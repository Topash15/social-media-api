const { Schema, model } = require('mongoose');

const usernameSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    }
})