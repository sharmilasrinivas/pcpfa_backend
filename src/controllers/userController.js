import User from "../models/User.js";

export const getUsers =
async(req,res)=>{

try{

const page =
parseInt(req.query.page) || 1;

const limit =
parseInt(req.query.limit) || 10;

const skip =
(page-1)*limit;

const total =
await User.countDocuments();

const users =
await User.find()
.skip(skip)
.limit(limit);

res.status(200).json({

success:true,

message:
"Users fetched successfully",

page,

limit,

total,

totalPages:
Math.ceil(total/limit),

data:users

});

}
catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};

export const getUserById =
async(req,res)=>{

try{

const user =
await User.findById(
req.params.id
);

if(!user){

return res.status(404)
.json({

success:false,

message:
"User not found"

});

}

res.status(200).json({

success:true,

message:
"User fetched successfully",

data:user

});

}
catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};