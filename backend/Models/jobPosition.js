const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobPositionSchema = new Schema({
  title: {
    type: String,
    required: true 
    },
  details: {
    type: String,
    required: true 
    },
  location: {
    type: String,
    required: true 
    },
}, {
  timestamps: true // optional: helps track updates
});

jobPositionSchema.index({ title: 1, location: 1 }, { unique: true }); // to avoid duplicates

module.exports = mongoose.model('JobPosition', jobPositionSchema);
