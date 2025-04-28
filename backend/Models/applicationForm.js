const mongoose = require('mongoose');
const { Buffer } = require('buffer');


const ApplicationFormSchema = new mongoose.Schema({
    firstName: {
         type: String, 
         required: true 
        },
    lastName: { 
        type: String,
         required: true 
        },
    address: {
        type: String,
        required: true
        },
    mobileNumber: {
        type: Number,
         required: true 
        },
    email: {
        type: String,
        required: true, 
        unique: true 
        },
    graduation: {
         type: String,
          required: true 
        },
    cgpa: {
         type: Number,
          required: true,
          valid:{
            min: 1,
            max: 10
          } 
        },
    jobPosition: {
         type: String,
          required: true 
        },
    // resume: {
    //     type: String,
    //     required: true 
    // }
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('applicationforms', ApplicationFormSchema);