import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";




function App()
{
  const [user,setuser]=useState([{username:"Shammi06",password:"shammi@2002"}])


  return(<div>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login user={user} setuser={setuser} />}></Route>
      <Route path='/signup' element={<Signup user={user} setuser={setuser} />}></Route>
      <Route path='/landing' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  </div>)

}

export default App
