import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from "./Home.js"
import Add from "./Add.js"
import Search from "./Search.js"
import 'bootstrap/dist/css/bootstrap.min.css';
//import Display from "./Display.js"
import Delete from "./Delete.js"
import Update from "./Update.js";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path ="/add" element={<Add/>}></Route>
          <Route path ="/" element={<Home/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
          <Route path="/delete" element={<Delete/>}></Route>
          <Route path="/update" element={<Update/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
