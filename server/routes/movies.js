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


module.exports = router;