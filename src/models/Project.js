import mongoose from "mongoose";

const projectSchema =
new mongoose.Schema({

  projectId:{
    type:String,
    unique:true
  },

  title:String,

  description:String,

  owner:String,

  status:String

});

export default mongoose.model(
  "Project",
  projectSchema
);