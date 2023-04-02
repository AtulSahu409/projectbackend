const mongoose=require("mongoose")

const ProjectSchema=mongoose.Schema({
    Title:String,
    date:String,
    time:String,
    Status:String,
    Estimation:Number,
})

const ProjectModel=mongoose.model("Project",ProjectSchema)

module.exports={ProjectModel}