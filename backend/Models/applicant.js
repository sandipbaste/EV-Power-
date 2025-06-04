const mongoose = require("mongoose");

const ApplicantSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  // other fields like phone, CGPA etc.
});

module.exports = mongoose.model("Applicant", ApplicantSchema);
