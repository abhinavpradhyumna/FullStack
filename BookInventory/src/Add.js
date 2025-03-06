import { useForm } from "react-hook-form";
import react from "react"
import axios from "axios";
import {Button} from "react-bootstrap"
import Home from "./Home"
const Add = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const addToDB = async (data) => {
        try {
            const response = await axios.post("http://localhost:5000/add", data);
            if (response.data.flag) {
                alert("Book was added: " + data.Title);
            } else {
                alert("Book was not added");
            }
        } catch (err) {
            console.log("Error in Axios POST", err);
        }
    };

    return (
        <div>
            <Home/>
            <form onSubmit={handleSubmit(addToDB)}>
                <label>Enter Name of Book :</label>
                <input
                    type="text"
                    {...register("Title", {
                        required: "*Book Title is Compulsory",
                        minLength: { value: 2, message: "Min Length is 2" }
                    })}
                />
                {errors.Title && <p>{errors.Title.message}</p>}
                <br />

                <label>Enter ISBN Number :</label>
                <input
                    type="number"
                    {...register("ISBN", { required: "*ISBN is Mandatory" })}
                />
                <br />

                <label>Enter Name of Author :</label>
                <input
                    type="text"
                    {...register("Author", { required: "*Author Name is Compulsory" })}
                />
                <br />

                <label>Select Genre :</label>
                <select {...register("Genre", { required: true })}>
                    <option value="">Select a Genre</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Biography">Biography</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Horror">Horror</option>
                </select>
                {errors.Genre && <p>{errors.Genre.message}</p>}
                <br />

                <label>Enter the Quantity of Books</label>
                <input
                    type="number"
                    {...register("Quantity", {
                        required: true,
                        min: { value: 2, message: "Minimum Number must be at least 2" }
                    })}
                />
                {errors.Quantity && <p>{errors.Quantity.message}</p>}
                <br />

                <Button type="submit" variant="success">Add Book</Button>
            </form>
        </div>
    );
};

export default Add;
