import Issue from "../models/Issue.js";
import Project from "../models/Project.js";

export const getIssueAnalytics =
async(req,res)=>{

const totalIssues =
await Issue.countDocuments();

const openIssues =
await Issue.countDocuments({
status:"open"
});

const resolvedIssues =
await Issue.countDocuments({
status:"resolved"
});

const closedIssues =
await Issue.countDocuments({
status:"closed"
});

res.status(200).json({

success:true,

message:
"Issue analytics fetched successfully",

data:{

totalIssues,
openIssues,
resolvedIssues,
closedIssues

}

});

};

export const getProjectAnalytics =
async(req,res)=>{

const projects =
await Project.find();

res.status(200).json({

success:true,

message:
"Project analytics fetched successfully",

data:projects

});

};

export const getDeveloperAnalytics =
async(req,res)=>{

const developers =
await Issue.aggregate([
{
$group:{
_id:"$assignedTo",
resolvedIssues:{
$sum:1
}
}
}
]);

res.status(200).json({

success:true,

message:
"Developer analytics fetched successfully",

data:developers

});

};