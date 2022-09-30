const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const secretToken = 'secretToken'

function getCurrentDate(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var today = date.getDate();

    return new Date(Date.UTC(year, month, today));
}

const MovieSchema = mongoose.Schema({
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
    status: {
        type: Number,
        default: 0 // 0 다 읽음, 1 읽는 중, 2 읽을 예정
    },
    Date: {
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

MovieSchema.statics.findByToken = function(token, cb){
    var Movie = this
    jwt.verify(token,secretToken,function(err, decoded){
        Movie.find({"user": decoded}, function(err,Movies){
            if(err) return cb(err);
            cb(null,Movies)
        })
    })  
}

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = { Movie }