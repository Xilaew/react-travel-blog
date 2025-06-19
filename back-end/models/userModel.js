const mongoose = require('mongoose')

const UserSchema =new mongoose.schema({
    username : String,
    email:String,
    password:String

})

const UserModel = mongoose.model('user',UserSchema)

MediaSourceHandle.exports = UserModel;