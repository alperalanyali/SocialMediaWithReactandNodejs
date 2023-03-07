const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id:{
        type:String,
        require:true
    },
    userName:{
        type:String,    
        required:true,
        minlenght:4  
        
    },
    email:{
        type:String,
        required:["Eposta zorunlu alandır"],

    },
    password:{
        type:String,
        required:["Şifre zorunlu alandır"],
        minlenght:6
    },
    phone:{
        type:String,    
    }
})

userSchema.pre("save",function(next){
    if(this.password.length <6){
        next(new Error("Şifre  en az 6 karakter olmalılıdır"));
    }
    if(this.userName.length <4){
        next(new Error("Kullanıcı en az 4 karakter olmalılıdır"));
    }
})

module.exports = mongoose.model("User",userSchema);