import React from "react";
const flexBetween = "flex items-center justify-between";

const LiveAuction = () => {
  return (
    <div>
      <div class=" sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 class=" text-center font-bold tracking-tight text-gray-900 sm:text-3xl">
            Leilões ao vivo
          </h2>
          <div class=" border-2 border-black mx-auto mt-5 grid  grid-cols-1  border-t  sm:mt-10  lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span class="absolute inset-0"></span>
                  Carro barato vender rapido
                </a>
              </h3>
              <div class="flex items-center gap-x-4 text-xs">
                <time class="text-gray-500">16:40</time>
                <a
                  href="#"
                  class="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Automoveis
                </a>
              </div>
              <a
                href="#"
                className="mt-10 block w-full rounded-md  px-3 py-2  text-lg font-semibold  shadow-sm 0"
              >
                Dar Lance
              </a>
            </div>
            
            <div class="relative mt-8 flex items-center gap-x-4">
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Everton
                  </a>
                </p>
                <p class="text-gray-600">Vendedor Diamante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;
