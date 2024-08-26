import mongoose from "mongoose"

const user=new mongoose.Schema({name : String,age : Number})

const userdef =  mongoose.model("StudentData",user)

export default userdef;
