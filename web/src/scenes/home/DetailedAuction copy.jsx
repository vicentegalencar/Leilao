import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import registerIcon from "../assets/placa1.jpeg";
import Countdown from "../util/Countdown";
import Chat from "../util/Chat";
import Logged from "../navbar/logged";
const flexBetween = "flex items-center justify-between";

const DetailedAuction = () => {
  const [auctionDetails, setAuctionDetails] = useState({});
  const { id } = useParams();

  const fetchAuctionDetails = async () => {
    
      const response = await axios.get(`http://127.0.0.1:9000/RetrieveItens/${id}`, {
        headers: {
          "x-access-token": Cookies.get("token"),
        },
      });
      setAuctionDetails(response.data);
    } 

  useEffect(() => {
    fetchAuctionDetails();
  }, []);
  
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval((time) => {
      setSeconds(
        (seconds) =>
          (seconds =
            time.hours +
            " Horas " +
            time.total.minutes +
            " Minutos " +
            time.total.seconds +
            " Segundos")
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      <div className="flex  items-center justify-center py-24 flex-col ">
        <div className="w-full  max-w-7xl space-y-12 p-6 shadow-[0px_22px_70px_4px_rgba(0,0,0,0.10)] rounded-lg bg-white">
          <h2 className=" w-full text-center font-semibold text-3xl border-b-2 border-b-black p-5 ">
          {auctionDetails.name}
          </h2>
          <div className=" flex grid-cols-2">
            <div className="flex-col">
              <img src={registerIcon} className="w-96 rounded-lg" alt="" />
              <h2 className=" w-full  font-semibold text-xl border-b-2 border-b-black py-3 ">
                INFORMAÇÕES
              </h2>
              <p className="text-lg text-gray-600">Lance Inicial:</p>
              <p className="text-xl font-bold">R$ 6000,00</p>
              <p>Início: 13/03/2023 às 22:00 </p>
              <p>Término: 15/03/2023 às 10:00</p>
              <p>Localidade: Recife, PE</p>
            </div>
            <div className="flex-col justify-items-end w-full">
              <h2 className=" w-full text-white bg-green-400 p-2 font-semibold text-xl border-b-2 border-b-black py-3 ">
                DISPONIVEL
              </h2>
              <div className="mt-10">
                <p className="text-xl text-gray-600 text-right pr-">
                {auctionDetails.firstBid}
                </p>
                <p className="text-3xl font-bold text-right">R$ 12000,00</p>
              </div>
              <div className="text-right">
                <h3 class="mt-3 text-md font-bold text-bg-gray-900   ">
                  Tempo para acabar:
                </h3>
                <time className="text-gray-500 mt-4 ">{seconds}</time>
                <h3 className="mt-3 text-md font-bold text-bg-gray-900   ">
                  Vendedor
                </h3>
                <h3>Everton</h3>
              </div>
              <div className="text-center grid-col">
                <h3 className="font-semibold text-xl mb-6">
                  Escolha seu lance
                </h3>
                <div className=" grid-cols-1 space-x-7 ">
                  <button className="p-4 text-lg rounded-full bg-green-400 border-2 border-black ">
                    +R$35,00
                  </button>
                  <button className="p-4 text-lg rounded-full bg-green-400 border-2 border-black ">
                    +R$70,00
                  </button>
                  <button className="p-4 text-lg rounded-full bg-green-400 border-2 border-black ">
                    +R$120,00
                  </button>
                </div>
                <div className=" grid-cols-1 space-x-4 pt-5 ">
                  <button className="p-4 text-lg rounded-full bg-green-400 border-2 border-black ">
                    +R$200,00
                  </button>
                  <button className="p-4 text-lg rounded-full bg-green-400 border-2 border-black ">
                    +R$500,00
                  </button>
                  <button className="p-4 text-lg rounded-full bg-green-400 border-2 border-black ">
                    +R$800,00
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="  flex grid-cols-2  ">
            <div className=" space-y-12 p-12   ">
              <h2 className="font-semibold text-xl ">Especificações:</h2>
              <ul className="text-lg space-y-4 w-full ">
              {auctionDetails.description}
              </ul>
            </div>
            <div className="w-full">
              <h2 className="font-bold  text-xl ">CHAT ABERTO</h2>
              <Chat />
            </div>
          </div>
        </div>

        <div className=" w-full max-w-7xl shadow-[0px_22px_70px_4px_rgba(0,0,0,0.10)] mt-4 rounded-lg bg-white ">
          <div className=" p-6 border-2 border-black w-full  ">
            <h2 className="font-bold text-xl ">Histórico de Lances:</h2>

            <div className="flex grid-cols-3 text-lg  w-full ">
              <div className="flex-col  flex  items-center justify-center   p-20 space-y-2">
                <h2 className="  font-semibold pb-5">Usuario:</h2>
                <h2 className="">ChurrascoBR</h2>
                <h2 className="">MultiMegaman</h2>
              </div>
              <div className="flex-col  flex  items-center justify-center  p-20 space-y-2">
                <h2 className="  font-semibold pb-5">Lance:</h2>
                <h2 className="">R$9000</h2>
                <h2 className="">R$12000</h2>
              </div>
              <div className="flex-col  flex  items-center justify-center   p-20 space-y-2">
                <h2 className="  font-semibold pb-5">Data:</h2>
                <h2 className="">25/10/2002</h2>
                <h2 className="">25/10/2002</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedAuction;
