import React, { useState, useEffect } from "react";
const flexBetween = "flex items-center justify-between";
import registerIcon from "../assets/placa1.jpeg";
import user from "../assets/placa2.jpeg";
import lance from "../assets/lances.png";
import { Link as RouterLink } from "react-router-dom";
import Countdown from "../util/Countdown";

const LiveAuction = () => {
  const timetoend = new Countdown("22 March 2023 23:59:59 GMT-0300");
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(
        (seconds) =>
          (seconds =
            timetoend.total.hours +
            " Horas " +
            timetoend.total.minutes +
            " Minutos " +
            timetoend.total.seconds +
            " Segundos")
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className=" sm:py-16">
        <div class="mx-auto max-w-6xl  px-6 lg:px-8">
          <h2 class=" text-center font-bold tracking-tight text-gray-900 sm:text-5xl">
            Leilões Ativos
          </h2>
          <div class="mx-auto  grid  gap-y-10 gap-x-8 border-t border-gray-200 pt-10  lg:grid-cols-3 ">
          <RouterLink to="/detailed" style={{ textDecoration: "none" }}>
              <article class="  p-4 flex flex-col items-start justify-between  shadow-[0px_22px_70px_4px_rgba(0,0,0,0.20)] rounded-md">
                <img className="w-full" src={`${registerIcon}`} />
                <div class="group relative pt-3 w-full">
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




                  <h3 class="mt-3 text-md font-bold text-bg-gray-900  ">
                    Tempo para acabar:
                  </h3>
                  <time class="text-gray-500 mt-4 ">{seconds}</time>
                </div>
                <div class="flex pt-3 w-full space-x-2 mt-4">
                <img className="w-10 " src={`${lance}`} />
                <h3 class=" text-md font-bold text-bg-gray-900  mt-4 ">
                     R$910,20
                  </h3>
                  

                  <time class="text-gray-500 mt-4 pl-32 rounded-md text-lg ">12</time>
                  <img className="w-5 mt-4 " src={`${user}`} />
                  
                </div>
              </article>
            </RouterLink>

            <RouterLink to="/" style={{ textDecoration: "none" }}>
              <article class="  p-4 flex flex-col items-start justify-between  shadow-[0px_22px_70px_4px_rgba(0,0,0,0.20)] rounded-md">
                <img className="w-full" src={`${registerIcon}`} />
                <div class="group relative pt-3 w-full">
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

                  <h3 class="mt-3 text-md font-bold text-bg-gray-900  ">
                    Tempo para acabar:
                  </h3>
                  <time class="text-gray-500 mt-4 ">{seconds}</time>
                </div>
                <div class="flex pt-3 w-full space-x-2 mt-4">
                <img className="w-10 " src={`${lance}`} />
                <h3 class=" text-md font-bold text-bg-gray-900  mt-4 ">
                     R$910,20
                  </h3>
                  

                  <time class="text-gray-500 mt-4 pl-32 rounded-md text-lg ">12</time>
                  <img className="w-5 mt-4 " src={`${user}`} />
                  
                </div>
              </article>
            </RouterLink>

            <RouterLink to="/" style={{ textDecoration: "none" }}>
              <article class="  p-4 flex flex-col items-start justify-between  shadow-[0px_22px_70px_4px_rgba(0,0,0,0.20)] rounded-md">
                <img className="w-full" src={`${registerIcon}`} />
                <div class="group relative pt-3 w-full">
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

                  <h3 class="mt-3 text-md font-bold text-bg-gray-900  ">
                    Tempo para acabar:
                  </h3>
                  <time class="text-gray-500 mt-4 ">{seconds}</time>
                </div>
                <div class="flex pt-3 w-full space-x-2 mt-4">
                <img className="w-10 " src={`${lance}`} />
                <h3 class=" text-md font-bold text-bg-gray-900  mt-4 ">
                     R$910,20
                  </h3>
                  

                  <time class="text-gray-500 mt-4 pl-32 rounded-md text-lg ">12</time>
                  <img className="w-5 mt-4 " src={`${user}`} />
                  
                </div>
              </article>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;