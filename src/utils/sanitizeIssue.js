const sanitizeIssue =
(issue)=>{

return{

issueId:
issue.issueId?.trim(),

title:
issue.title?.trim(),

projectId:
issue.projectId?.trim(),

assignedTo:
issue.assignedTo?.trim(),

reportedBy:
issue.reportedBy?.trim(),

priority:
issue.priority
?.trim()
?.toLowerCase(),

severity:
issue.severity
?.trim()
?.toLowerCase(),

status:
issue.status
?.trim()
?.toLowerCase()

};

};

export default sanitizeIssue;