import {useForm} from "react-hook-form"
import axios from "axios"
import { useState } from "react"
import {Button} from "react-bootstrap"
import Home from "./Home"
const Delete = () =>{
    const {register , handleSubmit , formState:{errors}} = useForm()
    const Del =async(data)=>{
       try {
            const deletion = await axios.delete(`http://localhost:5000/delete/${data.isbn}`)
            console.log(deletion)
            if(deletion.data) alert("BOOK DELETED "+deletion.data.Title)
                else alert("Book Not Found")
        }catch (error) {
        console.log("Error in Axios Delete",error)
       }
    }

    return(
        <div>
            <Home/>
            <form onSubmit={handleSubmit(Del)}>
                <label>Enter ISBN Number to Delete</label>
                <input type="number" {...register("isbn",{required:"ISBN must not be Empty",min:{value:1,message:"ISBN must not be empty"
                }})}></input>
                <br></br>
                {errors.isbn && <p>{errors.isbn.message}</p>}
                <Button type="submit" variant="danger">Delete</Button>
            </form>
        </div>
    )
}
export default Delete;