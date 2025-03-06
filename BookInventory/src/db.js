const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

try{
    mongoose.connect("mongodb://localhost:27017/inventory").then(()=>{console.log("MongoDB connected")})
}catch(err){
    console.log("Error in MongoDB connection",err)
}

const BooksSchema = new mongoose.Schema({
    Title : {required : true , type : String} , 
    ISBN : {required : true , type : Number} ,
    Author : {required : true , type : String},
    Genre : {required : true , type : String} , 
    Quantity: {required : true , type : Number}
})

const Book = mongoose.model("Books",BooksSchema)

app.post("/add",async (req,res)=>{
    try{
            const books = new Book (req.body)
            await books.save()
            res.status(200).json({flag:true})
        }catch(err)
    {
        console.log("Error in App POST",err)
    }
})

app.get("/search/:isbn",async (req,res)=>{
    try{
        const book = await Book.findOne({ISBN : req.params.isbn})
        res.status(200).json(book)
    }catch(err)
    {
        console.log("Error in App GET" , err)
    }
})

app.get("/searchall",async(req,res)=>
{
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (error) {
        console.log("Error in APP GET",error)
    }
})

app.delete("/delete/:isbn",async(req,res)=>{
    try {
        const resp = await Book.findOneAndDelete({ISBN:req.params.isbn})
        res.status(200).json(resp)
    } catch (error) {
        console.log("Error in App Delete",error)
    }
})

app.put("/update/:isbn",async(req,res)=>{
    try {
        const resp = await Book.findOneAndUpdate({ISBN:req.params.isbn},{Title:req.body.Title},{new :true})
        res.status(200).json(resp)
    } catch (error) {
        console.log("Error in App Put",error)
    }
})


const PORT = 5000
app.listen(PORT,()=>{console.log("Server Running in ",PORT)})