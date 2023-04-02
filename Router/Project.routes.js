const express =require("express")

const ProjectRouter=express.Router()


const {ProjectModel} =require("../Modules/Project.module")

ProjectRouter.get("/:status/:page/",async(req,res)=>{
    const status=req.params.status
    const page=req.params.page
    // const search=req.params.selarch


    try{
        if(status=="all"){
            let data =await ProjectModel.find().skip((page-1)*10).limit(10)
            res.send(data)

        }
        else{
            let data =await ProjectModel.find({Status:status}).skip((page-1)*10).limit(10)
            res.send(data)
        }
         

    }
    catch(err){
        console.log(err)
        res.send(err)

    }
})

ProjectRouter.post("/newpost",async(req,res)=>{
    const payload=req.body
    try{
        let data= await ProjectModel.insertMany(payload)
        
        res.send(data) 

    }
    catch(err){
        console.log(err)
        res.send(err)

    }
})


module.exports={ProjectRouter}