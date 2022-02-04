import React from "react";
import NavBar  from "./components/NavBar";
import AllUsers from "./components/AllUers";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser"
import NotFound from "./components/NotFound"
import CodeForInterview from "./components/Home";
import { BrowserRouter,Route,Routes} from "react-router-dom";

const App = () =>{
  return (
              <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<CodeForInterview />} />
                        <Route exact path="/all" element={<AllUsers />} />
                        <Route exact path="/addUser" element={<AddUser />} />
                        <Route exact path="/edit/:id" element={<EditUser />} />
                        <Route  handler={<NotFound />} />  
                    </Routes>
            </BrowserRouter>    
  )
}
export default App;