const express = require('express');
const router = express.Router();
const {Movie} = require('../models/Movie')
const {auth} = require('../middleware/auth');


router.post('/register', auth, (req,res)=>{
    const movie = new Movie(req.body)
    movie.user = req.user._id

    movie.save((err,movie)=>{
        if(err)
            return res.status(400).send(err);
        
        return res.status(200).json({
            registerSuccess: true,
            title: movie.title
        })
    })
})

router.get('/collect',(req,res)=>{
    if(req.cookies.x_auth===undefined){ 
        return res.status(200).json({collectMovieSuccess:true, movies: []})
    }
    Movie.findByToken(req.cookies.x_auth, (err,movies)=>{
        if(err){
            console.log('collect Movie error')
            return res.status(400).send(err);
        }
        return res.status(200).json({
            collectMovieSuccess: true,
            movies: movies
        })
    });

})

router.get('/:movieId',(req,res)=>{
    Movie.findOne({_id : req.params.movieId},(err, info)=>{
        if(err){
            return res.status(400).send(err);
        }
        return res.status(200).json({
            getInfoMovieSuccess:true, 
            info: info
        })
    })
})

module.exports = router;