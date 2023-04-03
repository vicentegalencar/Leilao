import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  

  

  return (
    <div className="flex flex-col w-full  h-96 border border-gray-300 rounded bg-white">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            {message}
          </div>
        ))}
      </div>
      <form className="flex p-2 border-t border-gray-300 bg-gray-100">
        <input
          type="text"
        //   value={inputMessage}
          placeholder="Digite sua mensagem..."
          className="flex-1 px-2 py-1 mr-2 border border-gray-300 rounded outline-none"
        />
        <button type="submit" className="px-4 py-1 bg-blue-500 text-white rounded">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Chat;