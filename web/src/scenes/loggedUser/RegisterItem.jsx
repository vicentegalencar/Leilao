import React, { useEffect, useState } from "react";
import Logged from "../navbar/logged";
import Cookies from "js-cookie";
import axios from "axios";
import apiSettings from "../util/ApiSettings";


const RegisterItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    owner: JSON.parse(Cookies.get("userData")).id ,
    description: "",
    category: "",
    firstBid: "",
    endTime: "",
    photo: null,
  });

  const fetchUser = async (data) => {
    const response = await axios
      .post("http://127.0.0.1:9000/itens", data, {
        headers: {
          "x-access-token":  Cookies.get("token"),
          'content-type': 'multipart/form-data'
        },
      })
      .then(async (resposta) => {
        const response = await axios.post(
          "http://127.0.0.1:8000/Leilao/",
          {...formData,itemID:resposta.data.id},
          {
            headers: {
              "x-access-token": Cookies.get("token"),
            },
          }
        );
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    let form_data = new FormData();
    form_data.append('photo', formData.photo, formData.photo.name);
    form_data.append('name', formData.name);
    form_data.append('description',formData.description);
    form_data.append('firstBid', formData.firstBid);
    form_data.append('endTime', formData.endTime);
    form_data.append('owner', formData.owner);
    form_data.append('category', formData.category);
    
    fetchUser(form_data)

  }
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleImageChange = (e) => {
    let newData = { ...formData };
    newData.photo = e.target.files[0];
    setFormData(newData);
  };

  return (
    <div>
      <Logged />
      <div className="flex flex-col py-24  items-center justify-between  ">
        <div className="w-full  max-w-2xl rounded-lg p-5 bg-white ">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Liste um item
          </h2>
          <form action="">
            <p>Titulo</p>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              required
              className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
              placeholder="Título do anúncio"
              value={formData.name}
              onChange={handleChange}
            />
            <p className="my-10 pt-4 text-gray-400 border-t-2 border-gray-400">
              Caracterisicas
            </p>
            <div className="grid grid-cols-2 space-x-5">
              <div className="flex flex-col">
                <p>Categoria</p>
                <input
                  id="category"
                  name="category"
                  type="text"
                  autoComplete="off"
                  required
                  className=" my-2 relative block w-full rounded-md  p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                  placeholder="Categoria do produto"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col  ">
                <p>Descrição </p>
                <input
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="off"
                  required
                  className="  my-2 relative block w-full rounded-md  p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                  placeholder="Descrição do produto"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="w-full  max-w-2xl rounded-lg p-5 bg-white mt-12">
          <form action="" className="place-content-center">
            <p className="mb-3">Escolha uma imagem do seu produto</p>
            <div>
              <input
                name="photo"
                accept="image/jpeg,image/png,image/gif"
                type="file"
                onChange={(e) => {handleImageChange(e)}}
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
                  type="number"
                  autoComplete="off"
                  required
                  className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                  placeholder="Valor minimo do produto"
                  value={formData.firstBid}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <p>Fim do leilão</p>
                <div className="flex">
                  <input
                    id="endTime"
                    name="endTime"
                    type="date"
                    autoComplete="off"
                    required
                    className=" my-2 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 sm:text-sm sm:leading-7"
                    value={formData.endTime}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className=" w-full max-w-xs border-2 border-gray-300 mt-10 text-xl shadow-2xl rounded-full p-3 hover:text-white hover:bg-gray-600  "
            >
              Anunciar item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterItem;
