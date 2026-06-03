import User from "../models/User.js";
import Project from "../models/Project.js";
import Issue from "../models/Issue.js";
import Comment from "../models/Comment.js";

export const healthCheck =
async(req,res)=>{

try{

const users =
await User.countDocuments();

const projects =
await Project.countDocuments();

const issues =
await Issue.countDocuments();

const comments =
await Comment.countDocuments();

res.status(200).json({

success:true,

message:
"Database connected successfully",

data:{

database:"connected",

documentCount:
users+
projects+
issues+
comments

}

});

}
catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};