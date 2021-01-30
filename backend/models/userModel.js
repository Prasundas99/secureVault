const mongoose = require("mongoose");
const Schema = new mongoose.Schema();

const userSchema = Schema({
  userDetails: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Detail",
  },
  userDocuments: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Document",
  },
  userEducation: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Education",
  },
  userCareer: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Career",
  },
  userFinance: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Finance",
  },
  userMedical: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Medical",
  },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
