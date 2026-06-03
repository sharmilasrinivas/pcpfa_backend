import Issue from "../models/Issue.js";

export const createIssue =
async(req,res)=>{

const issue =
await Issue.create(
req.body
);

res.status(201).json({

success:true,

message:
"Issue created successfully",

data:issue

});

};

export const getIssues =
async(req,res)=>{

const page =
parseInt(req.query.page)||1;

const limit =
parseInt(req.query.limit)||10;

const skip =
(page-1)*limit;

const filter = {};

if(req.query.status)
filter.status =
req.query.status;

if(req.query.priority)
filter.priority =
req.query.priority;

if(req.query.severity)
filter.severity =
req.query.severity;

if(req.query.search){

filter.title = {

$regex:
req.query.search,

$options:"i"

};

}

const total =
await Issue.countDocuments(
filter
);

const issues =
await Issue.find(filter)
.skip(skip)
.limit(limit);

res.status(200).json({

success:true,

message:
"Issues fetched successfully",

page,

limit,

total,

totalPages:
Math.ceil(total/limit),

data:issues

});

};

export const getIssueById =
async(req,res)=>{

const issue =
await Issue.findById(
req.params.id
);

res.status(200).json({

success:true,

message:
"Issue fetched successfully",

data:issue

});

};

export const updateIssue =
async(req,res)=>{

const issue =
await Issue.findByIdAndUpdate(

req.params.id,

req.body,

{new:true}

);

res.status(200).json({

success:true,

message:
"Issue updated successfully",

data:issue

});

};

export const deleteIssue =
async(req,res)=>{

await Issue.findByIdAndDelete(
req.params.id
);

res.status(200).json({

success:true,

message:
"Issue deleted successfully"

});

};

export const assignIssue =
async(req,res)=>{

const issue =
await Issue.findByIdAndUpdate(

req.params.id,

{
assignedTo:
req.body.assignedTo
},

{new:true}

);

res.status(200).json({

success:true,

message:
"Issue assigned successfully",

data:issue

});

};

export const updateIssueStatus =
async(req,res)=>{

const issue =
await Issue.findByIdAndUpdate(

req.params.id,

{
status:req.body.status
},

{new:true}

);

res.status(200).json({

success:true,

message:
"Issue status updated successfully",

data:issue

});

};