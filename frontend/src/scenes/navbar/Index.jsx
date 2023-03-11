import React from "react";
// import Logo from "../assets/Logo.png";
const flexBetween = "flex items-center justify-between";

const Index = () => {
  return (
    <nav>
      <div className={`${flexBetween}fixed top-0 z-30 w-full py-5 `}>
        <div className={`${flexBetween} mx-auto w-5/6 rounded-lg`}>
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-16 text-sm `}>
              {/* <img src={Logo} alt="Logo" className={`w-20`} /> */}
              <a href="#"className="text-lg hover:text-violet-400">Leilão Atual</a>
              <a href="#"className="text-lg hover:text-violet-400 ">Próximos Leilões</a>
              <a href="#"className="text-lg hover:text-violet-400">Suporte</a>
            </div>
            <div className={`${flexBetween} gap-9 `}>
              <a href="#"className="text-lg hover:text-violet-400">Login</a>
              <a href="#"className="text-lg hover:text-violet-400">Cadastro</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
