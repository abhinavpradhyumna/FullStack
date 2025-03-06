const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Conference").then(()=>{console.log("Connected MongoDB")})

const conf = new mongoose.Schema({
    parname : {required:true , type : String},
    email:{required:true,type:String},
    id : {required : true , type : Number},
    status : {rquired:true,type : String},
})

const participant = mongoose.model("conf",conf)

app.post("/register",async(req,res)=>{
    try{
        const response = new participant(req.body)
        await response.save()
    }catch(err){
        console.log("Error In app.post",err)
    }
})
const PORT = 5000
app.listen(PORT,()=>{
    console.log("Server Running in ",PORT)
})