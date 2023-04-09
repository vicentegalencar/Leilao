import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import UnloggedNavbar from "./scenes/navbar/unlogged";
import Logged from './scenes/navbar/logged';
import Home from "./scenes/home/Index"
import HomeLogged from "./scenes/home/IndexLogged"
import Detailed from "./scenes/home/DetailedAuction"
import Login from "./scenes/authentication/Login"
import Register from "./scenes/authentication/Register"
import RegisterItem from "./scenes/loggedUser/RegisterItem"
import Profile from "./scenes/loggedUser/Profile"
import SupportTicket from './scenes/loggedUser/SupportTicket';

function App() {

  return (

    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/homeLogged' element={<HomeLogged />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/detailed' element={<Detailed />} />
      <Route path='/registerItem' element={<RegisterItem />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/ticket' element={<SupportTicket />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App