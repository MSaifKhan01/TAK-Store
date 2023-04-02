
const express = require('express')
require("dotenv").config()
const { connecting } = require('./Config/db')
const { userRouter } = require('./Routes/user.router')
// const {adminRouter}=require("./Routes/note.routes")
const {adminRouter}=require("./Routes/appliances.routes")
const {elecRouter}=require("./Routes/electronics.routes")
const {cartRouter}=require("./Routes/note.routes")
const {FashionRouter}=require("./Routes/fashion.routes")
const {payRouter}=require("./Routes/pay.routes")


const {auth}=require("./AuthMiddleware/Auth")
const cors=require("cors")
const app = express()
app.use(express.json())
app.use(cors())

// app.get("/", async(req, res) => {
//     let data= await MoviesModel.find()
//     res.send(data)
// })



app.use("/user",userRouter)


app.use("/product",adminRouter)
app.use("/electronic",elecRouter)
app.use("/fashion",FashionRouter)
app.use(auth)
app.use("/cart",cartRouter)
app.use("/pay",payRouter)

app.listen(process.env.PORT, async () => {
    try {
        await connecting
        console.log("Connected to Database Succesfully");
    } catch (error) {
        console.log(error)
        console.log("error Occured while connectng to db");
    }
    console.log("server is connected to port number 4000");
})