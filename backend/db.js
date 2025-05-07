const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const mongoURI = process.env.MONGOURI

const connectToMongo = ()=>{
    try {
            mongoose.connect(mongoURI)
            console.log('Database connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToMongo