const sanitizeProject =
(project)=>{

return{

projectId:
project.projectId?.trim(),

title:
project.title?.trim(),

description:
project.description?.trim(),

owner:
project.owner?.trim(),

status:
project.status
?.trim()
?.toLowerCase()

};

};

export default sanitizeProject;