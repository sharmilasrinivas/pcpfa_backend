const validateComment =
(comment)=>{

if(!comment.commentId)
return false;

if(!comment.issueId)
return false;

if(!comment.userId)
return false;

if(!comment.message)
return false;

return true;

};

export default validateComment;