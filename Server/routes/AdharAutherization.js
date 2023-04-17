const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");



require("dotenv").config();

// //dummydata
// const users = [
//     {name:"darshan",mobileNumber:"7020772376",AdharNo:"4786-3897-5755",fingerPrint:"kjsdbv"},
//     {name:"sangharsh",mobileNumber:"8421924827",AdharNo:"1234-2345-4567",fingerPrint:"jsnhdb"}
// ];

// User.create(users).then(()=>{
//   console.log('Dummy users created successfully');
// }).catch((err) => {
//   console.error(err);
// });

router.post('/api/adharAuth',(req,res)=>{
  const { adharno } = req.body; 
  User.findOne({ AdharNo: adharno }) 
    .then(user => {
      if (user!=null) {
        res.json({ mobileNumber: user.mobileNumber }); 
         console.log(user.mobileNumber);
      }else{
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Error fetching user data' }); 
    });
})

module.exports = router;
