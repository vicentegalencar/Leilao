import Cookies from "js-cookie";
import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [username, setUsername] = useState("");
  const socketRef = useRef();

  useEffect(() => {
    
    socketRef.current = io.connect("http://localhost:4001");

    socketRef.current.emit("ehlo", { auction_id: 1, user_data: JSON.parse(Cookies.get("userData")) }); // Inclua o nome de usuário no payload

    socketRef.current.on("comment", (message) => {
      console.log(message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message.message.text, user: message.message.user }, // Adicione o nome do usuário à mensagem
      ]);
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
  
    if (inputMessage.trim()) {
      const message = { text: inputMessage, user: JSON.parse(Cookies.get("userData")).name }; // Crie um objeto de mensagem com o texto e o nome do usuário
      setMessages((prevMessages) => [...prevMessages, message]); // Adicione a mensagem enviada ao estado 'messages'
      socketRef.current.emit("comment", message); // Envie a mensagem para o servidor
      setInputMessage("");
    }
  };

  return (
    <div className="flex flex-col w-full h-96 border border-gray-300 rounded bg-white">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <strong>{message.user}:</strong> {message.text} {/* Mostre o nome do usuário ao lado da mensagem */}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex p-2 border-t border-gray-300 bg-gray-100">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
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