const jwt=require('jsonwebtoken');
require('dotenv').config();

console.log(process.env.SECRET_KEY)

const authentication=(req,res,next)=>{
    const token=req.headers?.authorization?.split(" ")[1];

    if(token){
        const decoded=jwt.verify(tokenprocess.env.SECRET_KEY);
         if (decoded){
            const emailId=decoded.email;
            req.body.email=emailId;
            next()
         }else{
            res.send("Login Please");
         }
    }else{
        res.send("Login Please");
    }
}

module.exports={authentication}