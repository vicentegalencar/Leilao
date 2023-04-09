import React, { useState } from 'react';
import axios from "axios"
import Cookies from "js-cookie";

const SupportTicket = () => {
  const [userName, setUserName] = useState('Everton');
  const [ticketText, setTicketText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4001/ticket/create', {reason:ticketText}, {headers:{"x-access-token":Cookies.get("token")}})
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="mb-4 text-2xl font-semibold">Ticket de Suporte</h1>
        <div className="mb-4">
          <label className="block mb-2">Nome do Usuário</label>
          <input
            type="text"
            value={userName}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 cursor-default outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Texto do Ticket</label>
          <textarea
            value={ticketText}
            onChange={(e) => setTicketText(e.target.value)}
            className="w-full h-32 px-3 py-2 border border-gray-300 rounded resize-none outline-none"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded"
        >
          Enviar Ticket
        </button>
      </div>
    </div>
  );
};

export default SupportTicket;
