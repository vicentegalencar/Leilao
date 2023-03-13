import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../assets/logo.png";

const flexBetween = "flex items-center justify-between";
const navLinks = "text-lg hover:text-violet-400"



const Index = () => {
  return (
    <nav>
      <div className={`${flexBetween}fixed top-0 z-30 w-full py-5 shadow-md `}>
        <div className={`${flexBetween} mx-auto w-5/6 rounded-lg`}>
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-16 text-sm `}>
              <img src={Logo} alt="Logo" className={`w-12`} />
              <RouterLink to="/" style={{ textDecoration: "none" }}>
                <a href="#" className={`${navLinks}`}>
                  Home
                </a>
              </RouterLink>

              <a href="#" className={`${navLinks}`}>
                Leilões Ao vivo
              </a>
              <a href="#" className={`${navLinks}`}>
                Próximos Leilões
              </a>
              <a href="#" className={`${navLinks}`}>
                Suporte
              </a>
            </div>
            <div className={`${flexBetween} gap-9 `}>
              <RouterLink to="register" style={{ textDecoration: "none" }}>
                <a href="#" className={`${navLinks}`}>
                  Cadastro
                </a>
              </RouterLink>
              <RouterLink to="login" style={{ textDecoration: "none" }}>
                <a href="#" className={`${navLinks}`}>
                  Login
                </a>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
