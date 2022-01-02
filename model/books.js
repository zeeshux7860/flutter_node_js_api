const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Books = Schema({
    create_user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    page: {
        type: Number,
        required: true
    },
    author: {
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






const bookschema = mongoose.model('books', Books);

module.exports = bookschema;