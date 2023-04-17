const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const port = 3000;

require('dotenv').config();
require('./db');
require('./models/User');

const adharAuth = require('./routes/AdharAutherization');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(adharAuth);

app.get('/',(req,res) =>{
    res.send('this is index.js');
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})

