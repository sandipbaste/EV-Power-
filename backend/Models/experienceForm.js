import mongoose from 'mongoose';
const { Schema } = mongoose;

const experienceFormSchema = new Schema({
   jobPositionId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'jobPosition',
        required: true
   },
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
  resume: {
    type: String,
    required: true
  },
  companyName:{
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  durationFrom:{
    type: Date,
    required: true
  },
  durationTo:{
    type: Date,
    required: true
  },
  workModule: {
    type: String,
    required: true
  },
  createdAt: { 
    type: Date,
    default: Date.now }
})

module.exports = mongoose.model('experienceForm', experienceFormSchema);