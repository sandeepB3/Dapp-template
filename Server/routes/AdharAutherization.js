const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post('/api/adharAuth', async(req,res)=>{
  const { adharno } = req.body; 
  try{
    const user = await User.findOne({ AdharNo: adharno }) 
      if (user != null) {
        return res.json({user}); 
      }else{
        res.status(404).json({ message: 'User not found' });
      }
  }catch(error) {
      res.status(500).json({ message: 'Error fetching user data' }); 
  };
})

module.exports = router;
