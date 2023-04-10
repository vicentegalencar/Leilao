import React, { useState, useEffect } from "react";
const flexBetween = "flex items-center justify-between";
import registerIcon from "../assets/placa1.jpeg";
import user from "../assets/usernumber.png";
import lance from "../assets/bid.png";
import { Link as RouterLink } from "react-router-dom";
import Countdown from "../util/Countdown";
import Cookies from "js-cookie";
import axios from "axios";

const LiveAuction = () => {
  const [formData, setFormData] = useState({
    name: "",
    owner: JSON.parse(Cookies.get("userData")).id,
    description: "",
    category: "",
    firstBid: "",
    endTime: "",
    photo: null,
  });

  const [auctionItems, setAuctionItems] = useState([]);

  const fetchItems = async () => {
    const response = await axios.get("http://127.0.0.1:9000/itens", {
      headers: {
        "x-access-token": Cookies.get("token"),
      },
    });
    return response.data;
  };

  const fetchAuctions = async () => {
    const response = await axios.get("http://127.0.0.1:8000/Leilao/", {
      headers: {
        "x-access-token": Cookies.get("token"),
      },
    });
    return response.data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemsData, auctionsData] = await Promise.all([
          fetchItems(),
          fetchAuctions(),
        ]);

        // Mapear e combinar itemsData e auctionsData
        const combinedData = itemsData.map((item) => {
          const auction = auctionsData.find(
            (auction) => auction.itemId === item.id
          );
          return { ...item, ...auction };
        });

        setAuctionItems(combinedData);
      } catch (error) {
        console.error("Erro ao buscar dados dos servidores:", error);
      }
    };

    fetchData();
  }, []);

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
            {auctionItems.map((auctionItem) => (
              <RouterLink
                key={auctionItem.id}
                to={`/detailed/${auctionItem.id}`}
                style={{ textDecoration: "none" }}
                class=""
              >
                <article className=" p-4 flex flex-col  rounded-md shadow-xl hover:shadow-2xl">
                  <img className="w-full" src={auctionItem.photo} />
                  <div className="group relative pt-3 w-full">
                    <div>
                      <time className="text-gray-600">
                        Inicio: {auctionItem.startTime}
                      </time>
                      <a
                        href="#"
                        className="  rounded-full bg-gray-200 m-2 px-3 font-medium text-gray-600  hover:bg-gray-100"
                      >
                        {auctionItem.category}
                      </a>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-bg-gray-900 ">
                      {auctionItem.name}
                    </h3>

                    <div className="mt-4">
                      
                      <input 
                      className="bg-gray-200"
                      type="date" value={auctionItem.endTime} />
                    </div>
                  </div>
                  <div className="flex pt-3  space-x-2 mt-4">
                    <img className="w-10 " src={`${lance}`} />
                    <h3 className=" text-md font-bold text-bg-gray-900 mt-4 ">
                      R${auctionItem.firstBid}
                    </h3>

                    
                      <time className="text-gray-500 mt-4 pl-24 rounded-md text-lg ">
                        10
                      </time>
                      <img className="w-4 h-5 mt-5 " src={`${user}`} />
                    
                  </div>
                </article>
              </RouterLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;
