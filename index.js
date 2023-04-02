const express = require("express")

const cors=require("cors")

require("dotenv").config()

const {connection} = require("./config/data")
const {ProjectRouter} =require("./Router/Project.routes")
const {logger} =require("./Middleware/Logger")

const app=express();

app.use(express.json())

app.use(cors({
    origin:"*"
}))

app.get("/",(req,res)=>{
    res.send("web")
})

app.use(logger)
app.use("/project",ProjectRouter)



app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("connection to db cloud")


    }
    catch(err){
        console.log(err)

    }
    console.log("working on 3010")
})
