const express=require("express")
const userRouter=express.Router()
const {UserModel}=require("../model/user.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")


userRouter.post("/register",async(req,res)=>{
    const {email,password,name,mobile}=req.body;
    try {
        bcrypt.hash(password, 5, async (err, hash)=> {
         
            const user= new UserModel({email,name,mobile,password:hash})

            await user.save()
        res.status(200).send({"msg":"register successfully"})
        });
        
    } catch (error) {
        res.status(400).send({"msg":error.message})
        
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await UserModel.findOne({email})
   
    if(user){
        bcrypt.compare(password, user.password, async (err, result)=> {
           
            if(result){
                res.status(200).send({msg:"login successfully",token:jwt.sign({"userId":user._id}, 'shhhhh')})
            }else{
                res.status(400).send({msg:"Wrong Credentials"})

            }
        });
    }

    } catch (error) {
        res.status(400).send({"msg":error.message})
        
    }
})

userRouter.get("/details",(req,res)=>{

    const token=req.headers.authorization
    jwt.verify(token, 'shhhhh', function(err, decoded) {
        decoded? res.status(200).send("users details"):res.status(400).send({"msg":"login required,users details not match"}) // bar
      });
})

module.exports={
    userRouter
}