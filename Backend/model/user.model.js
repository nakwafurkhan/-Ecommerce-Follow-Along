const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,min:8,max:16},
});

const userModel=mongoose.model("usercollection",userSchema);

// export {userModel};
module.exports={
    userModel
}


