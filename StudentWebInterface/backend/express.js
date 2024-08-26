import express from "express";
import mongoose from "mongoose";
import userdef from "./user.js"
import cors from "cors";
try {
    await mongoose.connect("mongodb://localhost:27017/studentdata")
    console.log("connected");
}
catch (e) {
    console.log(e)
}
const app = express()
app.use(cors({preflightContinue:true,methods:"post",origin:"http://localhost:3000",}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.post("/", async (request, response) => {
    console.log(request.body)
    // const body = JSON.parse(request.body)
    const h = await userdef.create(request.body)
    console.log(h)
})
app.listen(3001, () => {
    console.log("started")

})
