import { Link } from "react-router-dom";

const Home = () =>{
    return (
        <div>
            <p>Welcome to VWX Tech International Conference to be held on 16th October 2024</p>
            <br></br>
            <h1>
                If interested please register Now by <Link to="/register">Clicking Here</Link>
            </h1>
        </div>
    )
}

export default Home;