import syncData from "../services/syncService.js";

export const syncDataset =
async(req,res)=>{

try{

const result =
await syncData();

res.status(200).json({

success:true,

message:
"Dataset synchronized successfully",

data:result

});

}
catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};