const User = require('../models/user');

const formCreation  = async(req,res)=>{
  const user = new User({
    name : req.body.name,
    Experience : {
      CompanyName : req.body.companyname,
      Position : req.body.position,
      StartDate : req.body.sdate,
      EndDate : req.body.edate,
      WorkDesc : req.body.wdesc,
      UsedSkills : req.body.uskills
    },
    Skills : {
      SkillName : req.body.skills,
      Exp : req.body.exp
    },
    Project : {
      ProjectTitle : req.body.ptitle,
      ProjectUrl : req.body.purl,
      ProjectDesc : req.body.pdesc,
      ProjectDuration : req.body.pduration
    },
    LicencesAndCertifications :{
      Name : req.body.licname,
      Organization : req.body.organization,
      Link : req.body.liclink,
      issueDate : req.bidy.ldate
    },
    Course :{
      Name : req.body.cname,
      Organization : req.body.corganization
    },
    Contact : {
      Email : req.body.email,
      Phone : req.body.phone,
      SkypeId : req.body.skypeid
    }
  });
  const data = await user.save();
  res.send(data);
}
const viewForm = async(req,res)=>{
  const user = await User.findById(req.body.id);
  if(!user){
    return res.send("Unsuccessful");
    
  }
  res.send(user);
}

module.exports = {
  formCreation,
  viewForm
}