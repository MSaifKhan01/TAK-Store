const express=require("express")
const cartRouter= express.Router()
const {NoteModel}=require("../Models/note.model")
const { applianceModel}=require("../Models/appliances.model")
const jwt=require("jsonwebtoken")

cartRouter.get('/',async (req,res)=>{
    const token=req.headers.authorization
    const decoded=jwt.verify(token,"jammi")
    try{
        if(decoded){
            const notes=await NoteModel.find({"userID":decoded.userID})
            res.status(200).send(notes)
        }
    }catch(err){
        res.status(400).send({"msz":err.message})
    }
})

cartRouter.post("/add", async(req,res)=>{
    try{
    const note=new NoteModel(req.body)
    await note.save()
    res.status(200).send({"Msz":"A New Note has been added"})
    }catch(err){
        res.status(400).send({"msz":err.message})
    }
})

cartRouter.patch("/Inc/:id",async (req,res)=>{
    const {id}=req.params
    const data=await NoteModel.findByIdAndUpdate({_id:id},{$inc:{quantity:1}})
    // console.log(data)
    res.status(200).send({"msg":"Data updated",data:data})
 })
 cartRouter.patch("/Dec/:id",async (req,res)=>{
    const {id}=req.params
    const data=await NoteModel.findByIdAndUpdate({_id:id},{$inc:{quantity:-1}})
    // console.log(data)
    res.status(200).send({"msg":"Data updated",data:data})
 })
 cartRouter.delete("/Del/:id",async (req,res)=>{
    const {id}=req.params
    const data=await NoteModel.findByIdAndDelete({_id:id})
    // console.log(data)
    res.status(200).send({"msg":"Data updated",data:data})
 })


module.exports={
    cartRouter
}