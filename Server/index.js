const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const port = 3000;

require('dotenv').config();
require('./db');
require('./models/User');

const adharAuth = require('./routes/AdharAutherization');
const otpAuth = require('./routes/OtpAutherization');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(adharAuth);
app.use(otpAuth);

app.get('/',(req,res) =>{
    res.send('This is index.js');
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})

