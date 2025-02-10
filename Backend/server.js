const express=require('express');
const mongoose=require('mongoose');
const multer=require("multer")
const { userModel } = require('./model/user.model');
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const cors=require("cors");
const {authentication}=require('./middleware/authentication')
const { productRouter } = require('./Routes/product.route');
// console.log(authentication,"J")
require('dotenv').config();

const app=express();

app.use(express.json());
app.use(cors())

// app.use(authentication)

let connection = mongoose.connect(process.env.mongoURL);



app.get("/",(req,res)=>{
    res.send("Hello")
});

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/")
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now()+"-"+file.originalname)
    }
});

const upload=multer({storage:storage});

app.post("/upload",upload.single("myFile"),(req,res)=>{
    try {
        console.log(req.file);
        res.send({"message":"file uploaded successfully"});
    } catch (error) {
        console.log(error);
        res.send({"err":error})
    }
});

app.post("/signup", async (req, res) => {
    console.log(req.body)
    const {name,email, password} = req.body;
    const userPresent = await userModel.findOne({email}) 
    if(userPresent?.email){
        res.send({"message":"Try loggin in, already exist"})
    }
    else{
        try{
            bcrypt.hash(password, 4, async function(err, hash) {
                const user = new userModel({name,email,password:hash})
                await user.save()
                res.send({"message":"Sign up successfull"})
            });
        }
       catch(err){
            console.log(err)
            res.send({"Error-message":"Something went wrong, pls try again later"})
       }
    }   
});


app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        let user= await userModel.find({email});
        if(user.length>0){
            let hashed_password=user[0].password;
            bcrypt.compare(password,hashed_password,function(err,result){
                if(result){
                    const token = jwt.sign({"email":user[0]._id},process.env.SECRET_KEY);
                    res.send({"msg":"Login successfull","token" : token,email})
                }else{
                    res.send("Login failed! Enter the correct password")
                }
            })
        }else{
            res.send("Login failed! Please register first")
        }
    } catch (error) {
        res.json({"Message":"Somthing went wrong!",error})
    }
})

app.use("/product", productRouter);

app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
    console.log(`Server is running on port http://localhost:${process.env.PORT}`)
})
