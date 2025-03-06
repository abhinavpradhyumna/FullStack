import React from "react"
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Home from "./Home.js"
import Register from "./Register.js"

function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
