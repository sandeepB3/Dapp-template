const mongoose =require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    mobileNumber:{
        type:String,
        required : true,
        unique:true
    },
    AdharNo:{
        type:String,
        required : true,
        unique:true
    },
    fingerPrint:{
        type:String,
        required : true,
        unique:true
    }
})

mongoose.model("User", UserSchema);