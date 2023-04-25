const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.Mongo_URL).then(()=>{
        console.log("connected to database");
    }
    ).catch((error)=>{
    console.log("Error occured "+ error);

});

module.exports = mongoose.connection;