const validateProject =
(project)=>{

if(!project.projectId)
return false;

if(!project.title)
return false;

return true;

};

export default validateProject;