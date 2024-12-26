var mongoose = require('mongoose')


const RegisterSchema = new mongoose.Schema({

    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        unique:true,
        require:true
    },
    hashPassword: {
        type: String,
        require:true
    },
    salt:{
        type:String,
        require:true,      
    },
    plan:{
        type: String,
        require:true,
    },
    expiryDate:{
        type:String,
        require:true,
    },
    Paytime:{
        type:String,
        require:true,
    }

})
const Register = mongoose.model('Register', RegisterSchema);

module.exports = Register
