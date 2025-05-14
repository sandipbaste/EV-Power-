
const mongoose = require('mongoose');

const aptitudeUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // this is fine
  },
  hashedPassword: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('AptitudeUser', aptitudeUserSchema);
