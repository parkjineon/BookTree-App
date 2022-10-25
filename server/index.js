const express = require('express');
const app = express();
require("dotenv/config");
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const config = require('./config/key')
const cookieParser = require('cookie-parser')

app.use(cookieParser())


//body-parser 기능
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/users', require('./routes/users'));
app.use('/api/books', require('./routes/books'));
app.use('/api/movies',require('./routes/movies'));


mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true,
}).then(() => {
    console.log('...mongoDB connected successfully')
}).catch(err => {
    console.log(err)
})


app.listen(PORT, () => {
    console.log('nice to meet you!')
})

