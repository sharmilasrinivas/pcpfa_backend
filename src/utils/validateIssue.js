const validStatuses = [
  "open",
  "in-progress",
  "testing",
  "resolved",
  "closed"
];

const validateIssue =
(issue)=>{

if(!issue.issueId)
return false;

if(!issue.title)
return false;

if(!issue.projectId)
return false;

if(
!validStatuses.includes(
issue.status
?.trim()
?.toLowerCase()
)
){
return false;
}

return true;

};

export default validateIssue;