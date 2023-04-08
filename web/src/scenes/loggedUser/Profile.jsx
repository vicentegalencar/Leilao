import React, { useState } from 'react';
import Logged from '../navbar/logged';

const Profile = () => {
  const [name, setName] = useState('Multi Megaman');
  const [email, setEmail] = useState('multimegaman@gmail.com');
  const [password, setPassword] = useState('senha');
  const [cpf, setCPF] = useState('123.456.789-00');

  const handleSave = () => {
    
    console.log('Salvar perfil:', { name, email, password, cpf });
  };

  return (
    

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      
      <div className="w-full max-w-xl p-6 bg-white rounded shadow">
        <h1 className="mb-4 text-2xl font-semibold">Perfil</h1>
        <div className="mb-4">
          <label className="block mb-2">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">CPF</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
          />
        </div>
        <button
          onClick={handleSave}
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Salvar
        </button>
      </div>
    </div>
  );
};

export default Profile;