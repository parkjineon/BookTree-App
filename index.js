const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://jineon123:jineon123@cluster0.22lhel8.mongodb.net/?retryWrites=true&w=majority",{
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