import React from "react";
const flexBetween = "flex items-center justify-between";
import registerIcon from "../assets/placa2.jpeg";
import lances from "../assets/lances.png";
import { Link as RouterLink } from "react-router-dom";

const NextAuctions = () => {
  return (
    <div>
      <div class=" sm:py-16">
        <div class="mx-auto max-w-6xl  px-6 lg:px-8">
          <h2 class=" text-center font-bold tracking-tight text-gray-900 sm:text-5xl">
            Agenda de Leilões
          </h2>
          <div class="mx-auto  grid max-w-2xl grid-cols-1 gap-y-10 gap-x-8 border-t border-gray-200 pt-10    lg:max-w-none lg:grid-cols-3">
            <RouterLink to="/" style={{ textDecoration: "none" }}>
              <article class="  p-4 flex flex-col items-start justify-between  shadow-[0px_22px_70px_4px_rgba(0,0,0,0.20)] rounded-md">
                <img className="w-full " src={`${registerIcon}`} />
                <div class="group relative pt-3">
                  <div>
                    <time class="text-gray-500">Inicio: 16:40</time>
                    <a
                      href="#"
                      class="  rounded-full bg-gray-50 m-2 px-3 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Tecnologia
                    </a>
                  </div>

                  <h3 class="mt-3 text-lg font-bold text-bg-gray-900 ">
                    CARRO BARATO VENDER MUITO
                  </h3>
                </div>
                
              </article>
            </RouterLink>

            <RouterLink to="/" style={{ textDecoration: "none" }}>
              <article class="  p-4 flex flex-col items-start justify-between  shadow-[0px_22px_70px_4px_rgba(0,0,0,0.20)] rounded-md">
                <img className="w-full " src={`${registerIcon}`} />
                <div class="group relative pt-3">
                  <div>
                    <time class="text-gray-500">Inicio: 16:40</time>
                    <a
                      href="#"
                      class="  rounded-full bg-gray-50 m-2 px-3 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Tecnologia
                    </a>
                  </div>

                  <h3 class="mt-3 text-lg font-bold text-bg-gray-900 ">
                    CARRO BARATO VENDER MUITO
                  </h3>
                </div>
                
              </article>
            </RouterLink>

            <RouterLink to="/" style={{ textDecoration: "none" }}>
              <article class="  p-4 flex flex-col items-start justify-between  shadow-[0px_22px_70px_4px_rgba(0,0,0,0.20)] rounded-md">
                <img className="w-full " src={`${registerIcon}`} />
                <div class="group relative pt-3">
                  <div>
                    <time class="text-gray-500">Inicio: 16:40</time>
                    <a
                      href="#"
                      class="  rounded-full bg-gray-50 m-2 px-3 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Tecnologia
                    </a>
                  </div>

                  <h3 class="mt-3 text-lg font-bold text-bg-gray-900 ">
                    CARRO BARATO VENDER MUITO
                  </h3>
                </div>
                
              </article>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextAuctions;
