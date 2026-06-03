import mongoose from "mongoose";

const issueSchema =
new mongoose.Schema({

  issueId:{
    type:String,
    unique:true
  },

  title:String,

  projectId:String,

  assignedTo:String,

  reportedBy:String,

  priority:String,

  severity:String,

  status:String

});

export default mongoose.model(
  "Issue",
  issueSchema
);