import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import registerIcon from "../assets/registerIcon.png";
import Logo from "../assets/logo.png";
import axios from "axios";
import Cookies from "js-cookie";
import Unlogged from "../navbar/unlogged";
import { Link as RouterLink } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const flexBetween = "flex items-center justify-between";
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/login", formData).then((response) => {
      Cookies.set("token", response.data.token);
      Cookies.set("userData", JSON.stringify(response.data.user));
      console.log(response.data);
      navigate("/homeLogged");
    });
  };

  return (
    <div>
      <Unlogged />
      <div className="flex  items-center justify-center py-24 ">
        <div className="w-full max-w-lg space-y-12 p-6 shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] rounded-lg ">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src={`${registerIcon}`}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Realize seu login
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm space-y-5">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Senha"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
