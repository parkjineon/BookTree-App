const mongoose = require('mongoose');
const moment = require('moment');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10
const secretToken = 'secretToken'
const today = new Date();

function getCurrentDate(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var today = date.getDate();

    return new Date(Date.UTC(year, month, today));
}

const bookSchema = mongoose.Schema({
    user: {
        type: String
    },
    title: {
        type: String,
        minlength: 1,
    },
    author: {
        type: String,
        default: ''
    },
    publisher: {
        type: String
    },
    status: {
        type: Number,
        default: 0 // 0 다 읽음, 1 읽는 중, 2 읽을 예정
    },
    startDate: {
        type: Date,
        default: getCurrentDate()
    },
    endDate: {
        type: Date,
        default: getCurrentDate()
    },
    rate: {
        type: Number,
        default: 5,
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