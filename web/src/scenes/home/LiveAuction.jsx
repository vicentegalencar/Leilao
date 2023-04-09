import React, { useState, useEffect } from "react";
const flexBetween = "flex items-center justify-between";
import registerIcon from "../assets/placa1.jpeg";
import user from "../assets/usernumber.png";
import lance from "../assets/bid.png";
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
        <div className="mx-auto max-w-6xl  px-6 lg:px-8">
          <h2 className=" text-center font-bold tracking-tight text-gray-900 sm:text-5xl">
            Leilões Ativos
          </h2>
          <div className="mx-auto  grid  gap-y-10 gap-x-8 border-t border-gray-200 pt-10  grid-cols-3 ">
          <RouterLink to="/detailed" style={{ textDecoration: "none" }} class="">
              <article className=" p-4 flex flex-col  rounded-md shadow-xl hover:shadow-2xl">
                <img className="w-full" src={`${registerIcon}`} />
                <div className="group relative pt-3 w-full">
                  <div>
                    <time className="text-gray-600">Inicio: 16:40</time>
                    <a
                      href="#"
                      className="  rounded-full bg-gray-200 m-2 px-3 font-medium text-gray-600  hover:bg-gray-100"
                    >
                      Tecnologia
                    </a>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-bg-gray-900 ">
                    CARRO BARATO VENDER MUITO
                  </h3>




                  <h3 className="mt-3 text-md font-bold text-bg-gray-900  ">
                    Tempo para acabar:
                  </h3>
                  <time className="text-gray-500 mt-4 ">{seconds}</time>
                </div>
                <div className="flex pt-3 w-full space-x-2 mt-4">
                <img className="w-10 " src={`${lance}`} />
                <h3 className=" text-md font-bold text-bg-gray-900  mt-4 ">
                     R$910,20
                  </h3>
                  

                  <time className="text-gray-500 mt-4 pl-32 rounded-md text-lg ">12</time>
                  <img className="w-5 mt-4 " src={`${user}`} />
                  
                </div>
              </article>
            </RouterLink>

            <RouterLink to="/" style={{ textDecoration: "none" }}>
              <article className="  p-4 flex flex-col shadow-xl hover:shadow-2xl rounded-md">
                <img className="w-full" src={`${registerIcon}`} />
                <div className="group relative pt-3 w-full">
                  <div>
                    <time className="text-gray-500">Inicio: 16:40</time>
                    <a
                      href="#"
                      className="  rounded-full bg-gray-200 m-2 px-3 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Tecnologia
                    </a>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-bg-gray-900 ">
                    CARRO BARATO VENDER MUITO
                  </h3>

                  <h3 className="mt-3 text-md font-bold text-bg-gray-900  ">
                    Tempo para acabar:
                  </h3>
                  <time className="text-gray-500 mt-4 ">{seconds}</time>
                </div>
                <div className="flex pt-3 w-full space-x-2 mt-4">
                <img className="w-10 " src={`${lance}`} />
                <h3 className=" text-md font-bold text-bg-gray-900  mt-4 ">
                     R$910,20
                  </h3>
                  

                  <time className="text-gray-500 mt-4 pl-32 rounded-md text-lg ">12</time>
                  <img className="w-5 mt-4 " src={`${user}`} />
                  
                </div>
              </article>
            </RouterLink>

            <RouterLink to="/" style={{ textDecoration: "none" }}>
              <article className="  p-4 flex flex-col shadow-xl hover:shadow-2xl rounded-md">
                <img className="w-full" src={`${registerIcon}`} />
                <div className="group relative pt-3 w-full">
                  <div>
                    <time className="text-gray-500">Inicio: 16:40</time>
                    <a
                      href="#"
                      className="  rounded-full bg-gray-200 m-2 px-3 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Tecnologia
                    </a>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-bg-gray-900 ">
                    CARRO BARATO VENDER MUITO
                  </h3>

                  <h3 className="mt-3 text-md font-bold text-bg-gray-900  ">
                    Tempo para acabar:
                  </h3>
                  <time className="text-gray-500 mt-4 ">{seconds}</time>
                </div>
                <div className="flex pt-3 w-full space-x-2 mt-4">
                <img className="w-10 " src={`${lance}`} />
                <h3 className=" text-md font-bold text-bg-gray-900  mt-4 ">
                     R$910,20
                  </h3>
                  

                  <time className="text-gray-500 mt-4 pl-32 rounded-md text-lg ">12</time>
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