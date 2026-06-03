import mongoose from "mongoose";

const commentSchema =
new mongoose.Schema({

  commentId:{
    type:String,
    unique:true
  },

  issueId:String,

  userId:String,

  message:String

});

export default mongoose.model(
  "Comment",
  commentSchema
);