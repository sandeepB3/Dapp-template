require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const accountSid = "ACa353a7e4d9611e2e6cb345cb2bfc59cc";
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = "VAfca35911cfeb1bed8643ef2bb7fd00e5";
const client = require("twilio")(accountSid, authToken);


router.post('/api/otpAuth', async(req, res)=> {

    try {
        console.log(req.body.mobileNumber);
        const {mobileNumber} = req.body;

        await client.verify.v2.services(verifySid)
        .verifications
        .create({to: '+91'+mobileNumber, channel: 'sms'})
        .then(verification =>  {
            console.log(verification.status)
            res.send(verification.status)
        })

    }catch(e){
        res.status(500).json({error: e.message});
    }    

})

router.post('/api/otpVerify', async(req, res) => {
    try{
        console.log('Waiting for OTP')
        const {mobileNumber, otp} = req.body;
        console.log(otp);

        await client.verify.v2.services(verifySid)
        .verificationChecks
        .create({to: '+91'+mobileNumber, code: otp})
        .then(verification_check => {
            console.log(verification_check.status)
            res.send(verification_check.status)
        });

    }catch(e){
        res.status(500).json({error: e.message});
    }
})


module.exports = router;
