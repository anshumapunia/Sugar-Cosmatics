const express=require("express");
const userRouter=express.Router()
const {userModel}=require("../model/user.model")
const jwt= require("jsonwebtoken")
const bcrypt= require("bcrypt")

userRouter.post("/register",async(req,res)=>{
    const {email,password,name,mobile}=req.body;

    try{
        bcrypt.hash(password,5,async(err,hash)=>{
            const user = new userModel({email,name,mobile,password:hash})

            await user.save()
            res.status(200).send({"msg":"register sucessfully"})
        });
    }
    catch(err)
    {
        res.status(400).send({"msg":err.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try
    {
        const user= await userModel.findOne({email})
        if(user)
        {
            bcrypt.compare(password,user.password,async(req,res)=>{

                if(result)
                {
                    res.status(200).send({msg:"login sucessfully", token:jwt.sign({"userId":user._id},'shhhhh')})
                }
                else
                {
                    res.status(400).send({msg:"Wrong Credentials"})
                }
            });
        }

    }
    catch(err)
    {
        res.status(400).send({"msg":err. message})
    }
})

userRouter.get("./details",async(req,res)=>{

    const token=req.headers.authorization
    jwt.verify(token,'shhhhh',function(err,decoded){
        
        if(decoded)
        {
            res.status(200).send("user details" )
        }
        else
        {
            res.status(400).send({"msg":"login required, users details not match"})
        }
    })
})


module.exports={
    userRouter
}