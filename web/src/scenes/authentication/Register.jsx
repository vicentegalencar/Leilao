import React from 'react'
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { LockClosedIcon } from '@heroicons/react/20/solid'
import registerIcon from "../assets/registerIcon.png";
import Logo from "../assets/logo.png";



const flexBetween = "flex items-center justify-between";



   

const Register = () => {
  return (
    <div className="flex  items-center justify-center py-24 ">
        <div className="w-full max-w-lg space-y-12 p-6 shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] rounded-lg ">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src={`${registerIcon}`}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Faça seu cadastro
            </h2>
           
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Endereço de email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" my-3 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 sm:text-sm sm:leading-7"
                  placeholder="Endereço de email"
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
                  className="my-3 relative block w-full rounded-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 sm:text-sm sm:leading-7"
                  placeholder="Senha"
                />
              </div>
            </div>


            

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Já possui uma conta?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                </span>
                CRIAR
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Register