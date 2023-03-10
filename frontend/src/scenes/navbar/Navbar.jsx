import React from 'react';
import Logo from "./Logo.png";
const flexBetween = "flex items-center justify-between";

const Navbar = () => {
  return (
    <nav>
      <div
      className={`${flexBetween}fixed top-0 z-30 w-full py-4 bg-indigo-300`} 
    >
      <div className={`${flexBetween} mx-auto w-4/5 bg-indigo-200 rounded-lg`}>
        <div className={`${flexBetween} w-full gap-16`}>
          

          
          <div className={`${flexBetween} gap-16 text-sm w-30`}>
            <img src={Logo} alt="Logo"  className={`w-20`}/>
                  <p className='font'>Leilão Atual</p>
                  <p>Cadastro</p>
                  <p>Login</p>
                  <p>Proximos Leilões</p>
                </div>
        </div>
      </div>
    
    </div>
    </nav>
    
  )
}

export default Navbar