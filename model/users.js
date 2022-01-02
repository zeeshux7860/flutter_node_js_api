const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const Schema = mongoose.Schema;

const UsersModel = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },

    message: {
        type: String

    },
    status: {
        type: Number,
        required: true
    }

});

UsersModel.pre("save", async function name(next) {
    const user = this;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    this.password = hash;
    next();
})
const UsersSchema = mongoose.model('users', UsersModel);

module.exports = UsersSchema;
