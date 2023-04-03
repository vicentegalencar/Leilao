import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import Navbar from "./scenes/navbar/Index"
import Home from "./scenes/home/Index"
import Detailed from "./scenes/home/DetailedAuction"
import Login from "./scenes/authentication/Login"
import Register from "./scenes/authentication/Register"
import RegisterItem from "./scenes/loggedUser/RegisterItem"
import Profile from "./scenes/loggedUser/Profile"

function App() {

  return (

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/detailed' element={<Detailed />} />
      <Route path='/registerItem' element={<RegisterItem />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App