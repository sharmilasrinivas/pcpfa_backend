import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId:{
    type:String,
    unique:true
  },
  name:String,
  email:String,
  role:String,
  department:String,
  status:String
});

export default mongoose.model(
  "User",
  userSchema
);