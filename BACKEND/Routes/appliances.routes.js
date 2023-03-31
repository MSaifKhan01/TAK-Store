const express=require("express")
const adminRouter= express.Router()
// const {applianceModel}=require("../Models/note.model")
const jwt=require("jsonwebtoken")
const { applianceModel }=require("../Models/appliances.model")

adminRouter.get("/",async(req,res)=>{
    // const token=req.header.authorization
    // const decoded=jwt.verify(token,process.env.secrete_key)

    try {
        let data=await applianceModel.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
})

// adminRouter.get('/',async (req,res)=>{
//     // const token=req.headers.authorization
//     // const decoded=jwt.verify(token,"jammi")
//     try{
//         if(decoded){
//             const appliances=await applianceModel.find()
//             // const appliances=await applianceModel.find({"userID":decoded.userID})
//             res.status(200).send(appliances)
//         }
//     }catch(err){
//         res.status(400).send({"msz":err.message})
//     }
// })

adminRouter.post("/add", async(req,res)=>{
    try{
    const note=new applianceModel(req.body)
    await note.save()
    res.status(200).send({"Msz":"A New Note has been added"})
    }catch(err){
        res.status(400).send({"msz":err.message})
    }
})

adminRouter.put("/update/:Id", async (req, res) => {
    let { Id } = req.params

    let newbody = req.body

    try {
        await applianceModel.findByIdAndUpdate({ _id: Id }, newbody)
        res.send({ "msg": " Movie dataupdated succesfully" })
    } catch (error) {
        res.send({ "error": "some error occured while updating" })
        console.log(error)
    }
})

adminRouter.delete("/delete/:Id", async (req, res) => {
    let  {Id } = req.params
    try {
        await applianceModel.findByIdAndDelete({ _id: Id })
        res.send({ "message": "Deleted succesfully" })
    } catch (error) {
        res.send({ "error": "some error occured while deleting" })
    }
})

adminRouter.patch("/update",async(req,res)=>{

})
module.exports={
    adminRouter
}