import {useForm} from "react-hook-form";
import {useState} from "react"
import axios from "axios"
import Home from "./Home";
const Update = () =>
{
    const {register , handleSubmit , formState:{errors}} = useForm()
    const [isbn,setisbn]=useState(null)

    const ret= async(data) =>
    {
        setisbn(data.ISBN)
        try {
            const response = await axios.put(`http://localhost:5000/update/${isbn}`,data)
            if(!response.data)
            {
                alert("Book With ISBN not found")
            }
        } catch (error) {
            console.log("Error in Axios PUT ",error)
        }
        
    }

    return (
        <div>
            <Home/>
            <form onSubmit={handleSubmit(ret)}>

                <label>Enter ISBN Number :</label>
                <input type="number" {...register("ISBN",{required:"*ISBN is Mandatory"})}></input>
                <br></br>
                <h2>Enter Updated Data</h2>
                <label>Enter Name of Book :</label>
                <input type="text" {...register("Title",{required:"*Book Title is Compulsory",minLength:{value:2,message:"Min Length is 2"}})}></input>
                {errors.Title && <p>{errors.Title.message}</p>}
                <br></br>
                <label>Enter Name of Author :</label>
                <input type="text" {...register("Author",{required:"*Author Name  is Compulsory"})}></input>
                <br></br>
                <label>Enter the Genre :</label>
                <input type="text" {...register("Genre")}></input>
                <br></br>
                <label>Enter the Quantity of Books</label>
                <input type="number" {...register("Quantity",{required: true , min : {value : 2 , message : "Minimum Number must be atleast 2"}})}></input>
                {errors.Quantity && <p>{errors.Quantity.message}</p>}
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default Update