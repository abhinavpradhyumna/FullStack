import React from "react"
import { useForm } from "react-hook-form";
import axios from "axios"
const Register=()=>{

    const {register,handleSubmit,formState:{errors}} = useForm()

    const formSubmission = async(data)=>
    {
        try{
            console.log(data)
            const res = await axios.post("http://localhost:5000/register",data)
        }catch(err)
        {
            console.log("Error in axios.post",err)
        }
        
    }

    return (
    <div>
        <form onSubmit={handleSubmit(formSubmission)}>

            <input {...register("parname" , {required:"Name is Required" , minLength : {
                value : 2 , message : "Participants name is Required atleast 2 characters"
            }})}></input>
            {errors && <p>{errors.parname.message}</p>}
            <input {...register("email" , {required:"Email is Required"})}></input>
            {errors && <p>{errors.email.message}</p>}
            <input {...register("id" , {required:"id is required" , min : {value : 1 , message : "ID must atleast be 1"}})}></input>
            {errors && <p>{errors.id.message}</p>}
            <input {...register("status")}></input>
            <input type="submit"></input>
        </form>
    </div>)
}

export default Register;