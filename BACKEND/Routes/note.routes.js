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

// cartRouter.put("/update/:Id", async (req, res) => {
//     let { Id } = req.params

//     let newbody = req.body

//     try {
//         await NoteModel.findByIdAndUpdate({ _id: Id }, newbody)
//         res.send({ "msg": " Movie dataupdated succesfully" })
//     } catch (error) {
//         res.send({ "error": "some error occured while updating" })
//         console.log(error)
//     }
// })

// cartRouter.delete("/delete/:Id", async (req, res) => {
//     let  {Id } = req.params
//     try {
//         await NoteModel.findByIdAndDelete({ _id: Id })
//         res.send({ "message": "Deleted succesfully" })
//     } catch (error) {
//         res.send({ "error": "some error occured while deleting" })
//     }
// })

// cartRouter.patch("/update",async(req,res)=>{

// })
module.exports={
    cartRouter
}