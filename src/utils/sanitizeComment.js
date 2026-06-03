const sanitizeComment =
(comment)=>{

return{

commentId:
comment.commentId?.trim(),

issueId:
comment.issueId?.trim(),

userId:
comment.userId?.trim(),

message:
comment.message?.trim()

};

};

export default sanitizeComment;