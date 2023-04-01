const express=require("express")
const adminRouter= express.Router()
// const {applianceModel}=require("../Models/note.model")
const jwt=require("jsonwebtoken")
const { applianceModel }=require("../Models/appliances.model")

adminRouter.get("/",async(req,res)=>{
   

    try {
        let data=await applianceModel.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})
adminRouter.get("/sort1",async(req,res)=>{
   

    try {
        let data=await applianceModel.find().sort({new_price:1})
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})
adminRouter.get("/sort2",async(req,res)=>{
    

    try {
        let data=await applianceModel.find().sort({new_price:-1})
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})
adminRouter.get("/sort3",async(req,res)=>{
   

    try {
        let data=await applianceModel.find().sort({description:1})
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})

adminRouter.get("/sort4",async(req,res)=>{
   

    try {
        let data=await applianceModel.find().sort({description:-1})
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})

module.exports={
    adminRouter
}