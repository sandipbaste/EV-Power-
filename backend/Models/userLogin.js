const mongoose = require('mongoose')
const {Schema} = mongoose

const UserLoginSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        tyrpe: String,
        required: true
    }
})

module.exports = mongoose.model('userLogin', UserLoginSchema)