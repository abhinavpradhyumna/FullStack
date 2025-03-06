import axios from "axios"
import {useParams} from "react-router-dom";

const SearchISBN = async() => {
    const isbn = useParams()
    console.log("In SEARCHISBN")
    try{
        const response = await axios.get("http://localhost:5000/search/${isbn}")
    }catch(err)
    {
        console.log("error in axios GET",err)
    }
    
}


export default SearchISBN