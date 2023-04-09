import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../assets/logo.png";

const flexBetween = "flex items-center justify-between";
const navLinks = "text-lg hover:text-indigo-300"



const Logged = () => {
  return (
    <nav className="">
      <div className={`${flexBetween}fixed top-0 z-30 w-full py-5 shadow-md `}>
        <div className={`${flexBetween} mx-auto w-11/12  rounded-lg`}>
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-16  `}>
              <img src={Logo} alt="Logo" className={`w-12`} />
              <RouterLink to="/" style={{ textDecoration: "none" }}>
                <a href="#" className={`${navLinks} text-2xl`}>
                  Home
                </a>
              </RouterLink>

    
              
              
            </div>
            <div className="space-x-9 text-center">
              <RouterLink to="/registerItem" style={{ textDecoration: "none" }}>
                <a href="#" className={`${navLinks} text-2xl`}>
                  Anunciar
                </a>
              </RouterLink>
              <RouterLink to="/profile" style={{ textDecoration: "none" }}>
                <a href="#" className={`${navLinks} text-2xl`}>
                  Perfil
                </a>
              </RouterLink>
              <RouterLink to="/ticket" style={{ textDecoration: "none" }}>
                <a href="#" className={`${navLinks} text-2xl`}>
                  Suporte
                </a>
              </RouterLink>
              </div>
            <div className={`${flexBetween} gap-9 flex grid-cols-2 `}>
              
            
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Logged;