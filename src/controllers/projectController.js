import Project from "../models/Project.js";

export const createProject =
async(req,res)=>{

try{

const project =
await Project.create(
req.body
);

res.status(201).json({

success:true,

message:
"Project created successfully",

data:project

});

}
catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};

export const getProjects =
async(req,res)=>{

try{

const projects =
await Project.find();

res.status(200).json({

success:true,

message:
"Projects fetched successfully",

data:projects

});

}
catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};

export const getProjectById =
async(req,res)=>{

const project =
await Project.findById(
req.params.id
);

res.status(200).json({

success:true,

message:
"Project fetched successfully",

data:project

});

};

export const updateProject =
async(req,res)=>{

const project =
await Project.findByIdAndUpdate(

req.params.id,

req.body,

{new:true}

);

res.status(200).json({

success:true,

message:
"Project updated successfully",

data:project

});

};

export const deleteProject =
async(req,res)=>{

await Project.findByIdAndDelete(
req.params.id
);

res.status(200).json({

success:true,

message:
"Project deleted successfully"

});

};