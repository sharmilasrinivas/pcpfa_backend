import Comment from "../models/Comment.js";

export const createComment =
async(req,res)=>{

const comment =
await Comment.create(
req.body
);

res.status(201).json({

success:true,

message:
"Comment added successfully",

data:comment

});

};

export const getComments =
async(req,res)=>{

const comments =
await Comment.find();

res.status(200).json({

success:true,

message:
"Comments fetched successfully",

data:comments

});

};

export const getCommentById =
async(req,res)=>{

const comment =
await Comment.findById(
req.params.id
);

res.status(200).json({

success:true,

message:
"Comment fetched successfully",

data:comment

});

};

export const deleteComment =
async(req,res)=>{

await Comment.findByIdAndDelete(
req.params.id
);

res.status(200).json({

success:true,

message:
"Comment deleted successfully"

});

};