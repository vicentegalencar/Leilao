import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import registerIcon from "../assets/placa1.jpeg";
import Countdown from "../util/Countdown";
import Chat from "../util/Chat";
import Logged from "../navbar/logged";
const flexBetween = "flex items-center justify-between";

const DetailedAuction = () => {
  const { id } = useParams();

  const [auctionItems, setAuctionItems] = useState({});
  const [itemItens, setItensItens] = useState({});
  const [bidHistory, setBidHistory] = useState([]);
  const fetchItems = async () => {
    await axios
      .get(`http://127.0.0.1:9000/RetrieveItens/${id}`, {
        headers: {
          "x-access-token": Cookies.get("token"),
        },
      })
      .then((response) => {
        setItensItens(response.data);
      });
  };

  const fetchAuctions = async () => {
    await axios
      .get(`http://127.0.0.1:8000/RetrieveLeilao/${id}`, {
        headers: {
          "x-access-token": Cookies.get("token"),
        },
      })
      .then((response) => {
        setAuctionItems(response.data);
        setBidHistory(response.data.lance_set);
        console.log(response.data.lance_set);
      });
  };

  const handlebutton = async (valor) => {
    console.log(typeof auctionItems.actualBid);
    await axios
      .post(
        `http://127.0.0.1:8000/Lance/`,
        {
          leilao: id,
          usuario: JSON.parse(Cookies.get("userData")).id,
          valor: parseFloat(auctionItems.actualBid) + valor,
        },
        {
          headers: {
            "x-access-token": Cookies.get("token"),
          },
        }
      )
      .then((response) => {
        const newItem = auctionItems;
        newItem.actualBid = response.data.valor;
        setAuctionItems({ ...newItem });
      });
  };

  useEffect(() => {
    fetchAuctions();
    fetchItems();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };


  const formatDate2 = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  return (
    <div>
      <div className="flex  items-center justify-center py-24 flex-col ">
        <div className="w-full  max-w-7xl space-y-12 p-6 shadow-[0px_22px_70px_4px_rgba(0,0,0,0.10)] rounded-lg bg-white">
          <h2 className=" w-full text-center font-semibold text-3xl border-b-2 border-b-black p-5 ">
            {auctionItems.name}
          </h2>
          <div className=" flex grid-cols-2">
            <div className="flex-col">
              <img
                src={itemItens.photo}
                alt={`Imagem de ${auctionItems.name}`}
                className="w-96 rounded-lg mr-12 pr-2 border-2 border-black"
              />
              <h2 className=" w-full  font-semibold text-xl border-b-2 border-b-black py-3 ">
                INFORMAÇÕES
              </h2>
              <p className="text-lg text-gray-600">Lance Inicial:</p>
              <p className="text-xl font-bold">R${auctionItems.firstBid}</p>
              <p>Início: {formatDate(auctionItems.creation)} </p>
              <p>Término: {formatDate(auctionItems.endTime)}</p>
            </div>
            <div className="flex-col justify-items-end w-full">
              <h2 className=" w-full text-white bg-green-400 p-2 font-semibold text-xl border-b-2 border-b-black py-3 ">
                DISPONIVEL
              </h2>
              <div className="mt-10">
                <p className="text-xl text-gray-600 text-right pr-"></p>
                <p className="text-3xl font-bold text-right">
                  R${auctionItems.actualBid}
                </p>
              </div>
              <div className="text-right">
                {/* <h3 class="mt-3 text-md font-bold text-bg-gray-900   ">
                  Tempo para acabar:
                </h3>
                <time className="text-gray-500 mt-4 "></time>
                <h3 className="mt-3 text-md font-bold text-bg-gray-900   ">
                  Vendedor
                </h3>
                <h3>Everton</h3> */}
              </div>
              <div className="text-center grid-col">
                <h3 className="font-semibold text-xl mb-6">
                  Escolha seu lance
                </h3>
                <div className=" grid-cols-1 space-x-7 ">
                  <button
                    className="p-4 text-lg rounded-full bg-green-400 border-2 border-black "
                    onClick={() => {
                      handlebutton(35.0);
                    }}
                  >
                    +R$35,00
                  </button>
                  <button
                    className="p-4 text-lg rounded-full bg-green-400 border-2 border-black "
                    onClick={() => {
                      handlebutton(80.0);
                    }}
                  >
                    +R$80,00
                  </button>
                  <button
                    className="p-4 text-lg rounded-full bg-green-400 border-2 border-black "
                    onClick={() => {
                      handlebutton(120.0);
                    }}
                  >
                    +R$120,00
                  </button>
                </div>
                <div className=" grid-cols-1 space-x-4 pt-5 ">
                  <button
                    className="p-4 text-lg rounded-full bg-green-400 border-2 border-black "
                    onClick={() => {
                      handlebutton(200.0);
                    }}
                  >
                    +R$200,00
                  </button>
                  <button
                    className="p-4 text-lg rounded-full bg-green-400 border-2 border-black "
                    onClick={() => {
                      handlebutton(500.0);
                    }}
                  >
                    +R$500,00
                  </button>
                  <button
                    className="p-4 text-lg rounded-full bg-green-400 border-2 border-black "
                    onClick={() => {
                      handlebutton(800.0);
                    }}
                  >
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
                {itemItens.description}
              </ul>
            </div>
            <div className="w-full">
              <h2 className="font-bold  text-xl ">CHAT ABERTO</h2>
              <Chat />
            </div>
          </div>
        </div>

        <div className=" w-full max-w-lg shadow-[0px_22px_70px_4px_rgba(0,0,0,0.10)] mt-4 rounded-lg bg-white ">
          <div className=" p-6 border-2 border-black w-full  ">
            <h2 className="font-bold text-xl ">Histórico de Lances:</h2>
            <div className="flex-col-3  flex    pt-20 space-x-20 border-b-2 border-b-black">
              <h2 className="  font-semibold pb-5 pl-2">Lance:</h2>
              <h2 className="  font-semibold pb-5">Data:</h2>
            </div>
            {bidHistory.map((bid, index) => (
            <div key={id} className="flex grid-cols-3 text-lg w-full">
              
              <div className="flex-col flex items-center justify-center p-16 pb-5 pl-0  border-b-2 border-b-black">
                <h2 className="">R${bid.valor}</h2>
              </div>
              <div className="flex-col flex items-center justify-center p-16 pb-5 pl-0 border-b-2 border-b-black ">
                <h2 className="">{formatDate2(bid.horario_lance)}</h2>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedAuction;
