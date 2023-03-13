import React from "react";
const flexBetween = "flex items-center justify-between";
import registerIcon from "../assets/placa1.jpeg";
import lances from "../assets/lances.png";

const NextAuctions = () => {
  return (
    <div>
      <div class=" sm:py-16">
        <div class="mx-auto max-w-6xl  px-6 lg:px-8">
          <h2 class=" text-center font-bold tracking-tight text-gray-900 sm:text-3xl">
            Agenda de Leilões
          </h2>
          <div class="mx-auto  grid max-w-2xl grid-cols-1 gap-y-10 gap-x-8 border-t border-gray-200 pt-10    lg:max-w-none lg:grid-cols-3">
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
              <div class=" mt-8   ">
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Everton
                    </a>
                  </p>
                </div>

                
                <a href="">Lances: </a>
                <time class="text-gray-500">12</time>
              </div>
            </article>


















            <article class="  p-4 flex flex-col items-start justify-between  shadow-[0px_22px_70px_4px_rgba(0,0,0,0.20)] rounded-md">
              <img className="w-full " src={`${registerIcon}`} />
              <div class="group relative pt-3">
                <div>
                  <time class="text-gray-500">Inicio: 16:40</time>
                  <a
                    href="#"
                    class="relative z-10 rounded-full bg-gray-50 m-2 px-3 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Tecnologia
                  </a>
                  <p></p>
                </div>

                <h3 class="mt-3 text-lg font-bold text-bg-gray-900 ">
                  CARRO BARATO VENDER MUITO
                </h3>
              </div>
              <div class=" mt-8 flex items-center ">
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Everton
                    </a>
                  </p>
                  <p>
                    12
                    <img className="w-5 " src={`${lances}`} />
                  </p>
                </div>
              </div>
            </article>
            <article class="  p-4 flex flex-col items-start justify-between  shadow-[0px_22px_70px_4px_rgba(0,0,0,0.20)] rounded-md">
              <img className="w-full " src={`${registerIcon}`} />
              <div class="group relative pt-3">
                <div>
                  <time class="text-gray-500">Inicio: 16:40</time>
                  <a
                    href="#"
                    class="relative z-10 rounded-full bg-gray-50 m-2 px-3 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    Tecnologia
                  </a>
                  <p></p>
                </div>

                <h3 class="mt-3 text-lg font-bold text-bg-gray-900 ">
                  CARRO BARATO VENDER MUITO
                </h3>
              </div>
              <div class=" mt-8 flex items-center ">
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      Everton
                    </a>
                  </p>
                  <p>
                    12
                    <img className="w-5 " src={`${lances}`} />
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextAuctions;
