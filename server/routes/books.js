const express = require('express');
const router = express.Router();
const {Book} = require('../models/Book')
const {auth} = require('../middleware/auth');


router.post('/register', auth, (req,res)=>{
    const book = new Book(req.body)
    book.user = req.user._id

    book.save((err,book)=>{
        if(err)
            return res.status(400).send(err);
        
        return res.status(200).json({
            registerSuccess: true,
            title: book.title
        })
    })
})

router.get('/collect',(req,res)=>{
    if(req.cookies.x_auth===undefined){ 
        return res.status(200).json({collectBookSuccess:true, books: []})
    }
    Book.findByToken(req.cookies.x_auth, (err,books)=>{
        if(err){
            console.log('여기 에러')
            return res.status(400).send(err);
        }
        return res.status(200).json({
            collectBookSuccess: true,
            books: books
        })
    });

})

router.get('/:bookId',(req,res)=>{
    Book.findOne({_id : req.params.bookId},(err, info)=>{
        if(err){
            return res.status(400).send(err);
        }
        return res.status(200).json({
            getInfoSuccess:true, 
            info: info
        })
    })
})



module.exports = router;