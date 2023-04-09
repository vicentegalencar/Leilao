import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Logged from "../navbar/logged";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    cpf: "",
    birthday: "",
    email: "",
    password: "",
    phone: "",
  });

  const fetchUser = async () => {
    
      const response = await axios.post("http://localhost:4000/user/info",{}, {
        headers: {
          "x-access-token": Cookies.get("token")
        },
      }).then((resposta)=>{
        setUser(resposta.data.userInfo);
      });
      
    } 
  

  useEffect(() => {
    fetchUser();
  }, []);

  
      
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    return `${year}-${month}-${day}`;
  };
    

  return (
    <div>
      <Logged />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
        <div className="w-full max-w-xl p-6 bg-white rounded shadow">
          <h1 className="mb-4 text-2xl font-semibold">Perfil</h1>
          <div className="mb-4">
            <label className="block mb-2">Nome</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Senha</label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">CPF</label>
            <input
              type="text"
              value={user.cpf}
              onChange={(e) => setUser({ ...user, cpf: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Data de Nascimento</label>
            <input
              type="date"
              value={formatDate(user.birthday)}
              onChange={(e) => setUser({ ...user, birthday: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Telefone</label>
            <input
              type="text"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
            />
          </div>
          <button
            
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

