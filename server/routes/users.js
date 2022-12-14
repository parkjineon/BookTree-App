const express = require('express');
const router = express.Router();
const {User} = require('../models/User')
const {auth} = require('../middleware/auth')

//회원 가입
router.post('/register', (req,res) => {
    const user = new User(req.body)

    user.save((err, user) =>{
        if(err) {
            //비밀번호 5자리 미만
            if(req.body.password.length <= 5)
                return res.json({registerSuccess: false, message: '비밀번호를 5자리 이상으로 설정하십시오.'})
            //이메일 주소 중복
            if(err.code === 11000) {
                return res.json({registerSuccess: false, message: '이메일 주소가 이미 사용 중입니다.'})
            }

            return res.status(400).send(err);
        }
        return res.status(200).json({
            registerSuccess: true, 
            email: user.email, 
            password: user.password
        })
    })    
})

//로그인
router.post('/login',(req,res)=>{
    User.findOne({'email': req.body.email}, (err,user) =>{
        if(err) return res.status(400).send(err);
        if(!user) return res.json({loginSuccess: false, message:'등록되지 않은 이메일 주소입니다.'})

        user.comparePassword(req.body.password, (err,isMatch)=>{
            if(err) return res.status(400).send(err)
            if(!isMatch) return res.json({loginSuccess: false, message: '비밀번호가 틀렸습니다'})

            user.generateToken((err, user)=>{
                if(err) return res.status(400).send(err)
                res.cookie('x_auth',user.token)
                return res.status(200).json({loginSuccess: true, message: '로그인 성공!'})
            })
        })

    })
})

//인증
//role 1 어드민 role 2 특정 부서 어드민
//role 0 일반유저 role 0이 아니면 관리자
router.get('/auth',auth,(req,res)=>{
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    })
})

//로그아웃
router.get('/logout', auth, (req,res)=>{
    User.findOneAndUpdate({_id: req.user._id},{token: ""},(err, user)=>{
        if(err) return res.status(400).send(err);
        res.cookie('x_auth','')
        return res.status(200).json({logoutSuccess: true, user: user})
    })
})

module.exports = router;