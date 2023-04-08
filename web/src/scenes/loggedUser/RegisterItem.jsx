import React, { useState } from "react";

const RegisterItem = () => {
  const [formData, setFormData] = useState({
    title: "",
    model: "",
    brand: "",
    category: "",
    firstBid: "",
    sellingTime: "",
    usageTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="flex flex-col py-24  items-center justify-between  ">
      <div className="w-full  max-w-2xl rounded-lg p-5 bg-white ">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Anuncie um item
        </h2>
        <form action="" onSubmit={handleSubmit}>
          <p>Titulo</p>
          <input
            id="title"
            name="title"
            type="text"
            autoComplete="off"
            required
            className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
            placeholder="Título do anúncio"
            value={formData.title}
            onChange={handleChange}
          />
          <p className="my-10 pt-4 text-gray-400 border-t-2 border-gray-400">
            Caracterisicas
          </p>
          <div className="grid grid-cols-3 space-x-5">
            <div className="flex flex-col">
              <p>Categoria</p>
              <input
                id="category"
                name="category"
                type="text"
                autoComplete="off"
                required
                className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                placeholder="Categoria do produto"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <p>Marca </p>
              <input
                id="brand"
                name="brand"
                type="text"
                autoComplete="off"
                required
                className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                placeholder="Marca do produto"
                value={formData.brand}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <p>Modelo</p>
              <input
                id="model"
                name="model"
                type="text"
                autoComplete="off"
                required
                className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                placeholder="Modelo do produto"
                value={formData.model}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>

      <div className="w-full  max-w-2xl rounded-lg p-5 bg-white mt-12">
        <form action="">
          <p className="mb-3">Escolha uma imagem do seu produto</p>
          <div>
            <input 
            type="file" 
            onChange={handleFileInputChange} 
            className="" 
            />
            {selectedFile && (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected Image"
                className="max-w-xs w-full shadow-lg rounded-full mt-3"
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
                 
                 id="firstBid"
                 name="firstBid"
                 type="text"
                 autoComplete="off"
                 required
                 className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                 placeholder="Valor minimo do produto"
                 value={formData.firstBid}
                 onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <p>Tempo de uso  </p>
              <input
                 id="usageTime"
                 name="usageTime"
                 type="number"
                 autoComplete="off"
                 required
                 className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                 placeholder="Tempo de uso em meses"
                 value={formData.usageTime}
                 onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <p>Tempo de venda</p>
              <div className="flex">
                <input
                  id="sellingTime"
                  name="sellingTime"
                  type="number"
                  autoComplete="off"
                  required
                  className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                  placeholder="Tempo de venda em meses"
                  value={formData.sellingTime}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <button 
      type="submit"
      className=" w-full max-w-xs border-2 border-gray-300 mt-10 text-xl shadow-2xl rounded-full p-3 hover:text-white hover:bg-gray-600  ">
        Anunciar item
      </button>
    </div>
  );
};

export default RegisterItem;
