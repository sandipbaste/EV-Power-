const mongoose = require('mongoose')
const { Schema } = mongoose

const jobPositionSchema = new Schema({
    experience: {
        type: String,
    },
    location: {
        type: String,
    },
    position: {
        type: String,
      }
})

module.exports = mongoose.model('jobPosition', jobPositionSchema)
