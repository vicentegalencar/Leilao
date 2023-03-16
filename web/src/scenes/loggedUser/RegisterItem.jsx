import React, { useState } from "react";

const RegisterItem = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col py-24  items-center justify-between  ">
      <div className="w-full  max-w-2xl rounded-lg p-5 bg-white ">
        <form action="">
          <p>Titulo</p>
          <input
            id="title"
            name="title"
            required
            className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
            placeholder="Exemplo: Carro rebaixado fudido pela vida"
          />
          <p className="my-10 pt-4 text-gray-400 border-t-2 border-gray-400">
            Caracterisicas
          </p>
          <div className="grid grid-cols-3 space-x-5">
            <div className="flex flex-col">
              <p>Categoria</p>
              <input
                id="title"
                name="title"
                required
                className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                placeholder="Exemplo: Tecnologia "
              />
            </div>
            <div className="flex flex-col">
              <p>Marca </p>
              <input
                id="title"
                name="title"
                required
                className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                placeholder="Exemplo: Motorola "
              />
            </div>
            <div className="flex flex-col">
              <p>Modelo</p>
              <input
                id="title"
                name="title"
                required
                className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                placeholder="Exemplo: Edge 30"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="w-full  max-w-2xl rounded-lg p-5 bg-white mt-12">
        <form action="">
          <p className="mb-3">Escolha uma imagem do seu produto</p>
          <div>
            <input type="file" onChange={handleFileInputChange} className="" />
            {selectedFile && (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected Image"
                className="w-40 shadow-lg rounded-full mt-3"
              />
            )}
          </div>
          <p className="my-10 pt-4 text-gray-400 border-t-2 border-gray-400">
            Detalhes de venda
          </p>
          <div className="grid grid-cols-3 space-x-5">
            <div className="flex flex-col">
              <p>Lance Inicial</p>
              <input
                id="title"
                name="title"
                required
                className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                placeholder="Exemplo: 3 anos "
              />
            </div>
            <div className="flex flex-col">
              <p>Tempo de uso </p>
              <input
                id="title"
                name="title"
                required
                className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                placeholder="Exemplo: Motorola "
              />
            </div>
            <div className="flex flex-col">
              <p>Data de Termino</p>
              <div className="flex">
                <input
                  type="date"
                  id="title"
                  name="title"
                  required
                  className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                  placeholder="Exemplo: Edge 30"
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <button className=" w-full max-w-xs border-2 border-gray-300 mt-10 text-xl shadow-2xl rounded-full p-3 hover:text-white hover:bg-gray-600  ">Anunciar</button>
    </div>
  );
};

export default RegisterItem;
