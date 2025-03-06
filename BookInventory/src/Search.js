import {useForm} from "react-hook-form"
import axios from "axios"
import { useState } from "react"
import Home from "./Home"
const Search = () =>{
    const {register , handleSubmit , formState:{errors}} = useForm()
    const [bookdetails,setbook]=useState({})
    const [allbooks,setall] = useState(null)
    const searchISBN = async(data) =>{
        setbook(null)
        setall(null)
        try {
            const isbn = data.isbn
        const response = await axios.get(`http://localhost:5000/search/${isbn}`)
        if(response.data===null)
        {
            alert("No Book Found")
        }
        setbook(response.data)
        } catch (error) {
            console.log("Error in Axios Get",error)
        }
        
    }

    const Display = async() =>
    {
        setall(null)
        setbook(null)
        try {
            const response = await axios.get("http://localhost:5000/searchall")
            setall(response.data)
        } catch (error) {
            console.log("Error in AXIOS Get searchall",error)
        }
    }
    return(
        <div>
            <Home/>
            <form onSubmit={handleSubmit(searchISBN)}>
                <label>Enter ISBN Number to Search</label>
                <input type="number" {...register("isbn",{required:"ISBN must not be Empty",min:{value:1,message:"ISBN must not be empty"
                }})}></input>
                <br></br>
                {errors.isbn && <p>{errors.isbn.message}</p>}
                <button type="submit">Search</button>
            </form>
            <button onClick={Display}>Search All</button>
            {bookdetails && (<>
            <h1>Book Name : {bookdetails.Title}</h1></>)}
            {allbooks && (
                <>
                <table border={1} cellPadding={10} cellSpacing={10}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                allbooks.map((book,index)=>(
                                    <tr key={index}>
                                        <td>
                                            <strong>{book.Title}</strong>
                                        </td>
                                        <td>
                                            <strong>{book.Author}</strong>
                                        </td>
                                        <td>
                                            <strong>{book.Genre}</strong>
                                        </td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
                    
            </>
            )}
        </div>
    )
}
export default Search ;