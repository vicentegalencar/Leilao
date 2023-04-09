import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../assets/logo.png";
import Icon from "../assets/icon.png";

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
              <RouterLink to="/homeLogged" style={{ textDecoration: "none" }}>
                <span href="#" className={`${navLinks} text-2xl`}>
                  Home
                </span>
              </RouterLink>

    
              
              
            </div>
            <div className="space-x-32 text-center">
              <RouterLink to="/registerItem" style={{ textDecoration: "none" }}>
                <span href="#" className={`${navLinks} text-2xl`}>
                  Anunciar
                </span>
              </RouterLink>
              <RouterLink to="/profile" style={{ textDecoration: "none" }}>
                <span href="#" className={`${navLinks} text-2xl`}>
                  Perfil
                </span>
              </RouterLink>
              <RouterLink to="/ticket" style={{ textDecoration: "none" }}>
                <span href="#" className={`${navLinks} text-2xl`}>
                  Suporte
                </span>
              </RouterLink>
              </div>
            <div className={`${flexBetween} gap-9 flex grid-cols-2 `}>
              
            
            <img src={Icon} alt="icon" className={`w-12`} />
            <RouterLink to="/" style={{ textDecoration: "none" }}>
                <span href="#" className={`${navLinks} text-2xl`}>
                  Sair
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Logged;