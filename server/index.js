const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const {User} = require('./models/User')
const config = require('./config/key')
const cookieParser = require('cookie-parser')
const {auth} = require('./middleware/auth')

app.use(cookieParser())
//body-parser 기능
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true,
}).then(() => {
    console.log('...mongoDB connected successfully')
}).catch(err => {
    console.log(err)
})

app.get('/',(req,res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('nice to meet you!')
})


app.post('/api/users/register', (req,res) => {
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

app.post('/api/users/login',(req,res)=>{
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

//role 1 어드민 role 2 특정 부서 어드민
//role 0 일반유저 role 0이 아니면 관리자
app.get('/api/users/auth',auth,(req,res)=>{
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

app.get('/api/users/logout', auth, (req,res)=>{
    User.findOneAndUpdate({_id: req.user._id},{token: ""},(err, user)=>{
        if(err) return res.status(400).send(err)
        return res.status(200).json({logoutSuccess: true})
    })
})
