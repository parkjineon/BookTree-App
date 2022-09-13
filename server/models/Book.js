const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10
const secretToken = 'secretToken'

const bookSchema = mongoose.Schema({
    user: {
        type: String
    },
    author: {
        type: String,
        default: ''
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    title: {
        type: String,
        minlength: 1,
    },
    stars: {
        type: Number,
        min: 0,
        max: 5
    },
    review: {
        type: String
    }
})

bookSchema.statics.findByToken = function(token, cb){
    var book = this
    jwt.verify(token,secretToken,function(err, decoded){
        book.find({"user": decoded}, function(err,books){
            if(err) return cb(err);
            cb(null,books)
        })
    })  
}

const Book = mongoose.model('Book', bookSchema);
module.exports = { Book }