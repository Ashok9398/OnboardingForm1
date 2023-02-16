const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name : {
    type: String,
      required: true,
      trim: true,
  },
  Experience : {
    "CompanyName ": {
      type: String,
      required: true,
      trim: true,
    },
    Position : String,
    StartDate : Date,
    EndDate : Date,
    WorkDesc: String,
    UsedSkills : [String]
  },
  Skills : {
    SkillName : [String],
    Exp: Number
  },
  Project : {
    ProjectTitle :{
      type: String,
      required: true,
      trim: true,
    },
    ProjectUrl : String,
    ProjectDesc : String,
    projectDuration : String
    
  },
  LicencesAndCertifications : {
    Name : String,
    Organization : String,
    Link: String,
    issueDate : Date
  },
  Course : {
    Name : {
      type: String,
      required: true,
      trim: true,
    },
    Organization : String
  },
  Contact : {
    Email : {
      type: String,
      required: true,
      trim: true,
    },
    Phone :{
      type: String,
      required: true,
      trim: true,
    },
    SkypeId : {
      type: String,
      required: true,
      trim: true,
    }
  }
  
});

module.exports = mongoose.model("User",userSchema);