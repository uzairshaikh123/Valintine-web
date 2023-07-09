const mongoose  = require("mongoose");

const AuthSchema = mongoose.Schema({
    name:String,
    email: String,
    password: String
})

const AuthModel=mongoose.model("users",AuthSchema)


module.exports=AuthModel