const express = require("express")
const productRouter = express.Router()
const{ProductModel}= require("../model/product.model")

productRouter.get("/",async(req,res)=>{
    try
    {
        const products= await ProductModel.find();
        console.log(products);
        res.status(200).send(products);
    }
    catch(err)
    {
        res.status(400).send({msg:err.message})
    }
});

productRouter.post("/create",async(req,res)=>{
    const payload= req.body
    const product_things=new ProductModel(payload)
    await product_things.save()
    res.send({msg:"Products Created"})
})

productRouter.patch("/update/:productId", async(req,res)=>{
    const payload=req.body
    const productId= req.params.Id

    try{
        await ProductModel.findByIdAndUpdate({_id:productId},payload)
        res.status(200).send({msg:"Updated sucessfully"})
    }
    catch(err)
    {
        res.status(400).send({"msg":err.message})
    }
})

productRouter.delete("/delete/:productId",async(req,res)=>{

    const productId= req.params.Id

    try{
        await ProductModel.findByIdAndDelete({_id:productId})
        res.status(200).send({"msg":"deleted sucessfully"})
    }
    catch(err)
    {
        res.status(400).send({"msg":err.message})
    }
})

module.exports={
    productRouter
}