/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit , reset} = useForm();
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    setLoading(true);
    try {
      if(data.email === 'mohdshoaib127898'  && data.password === '42344242') {
         toast.success("Mohd Shoaib Logged In Successfully");
         navigate('/');
         setLoading(false)
      } else {
        toast.error('email and password does not match')
        setLoading(false)
        reset()
      }
    } catch (error) {
      console.log('error',error);
    }
    
  };
  return !loading ? (
    <div className="flex flex-col justify-center items-center w-full dark:bg-slate-800 bg-gray-200 ">
      <div
        className="-mt-10 justify-center flex flex-col w-9/12 sm:w-6/12 lg:w-4/12  min-h-screen"
      >
        <div className='border border-gray-500 p-3 rounded-lg'>
        <div className="mb-2 flex justify-center">
          <span className="dark:text-gray-300 text-gray-950 ease-out hover:ease-in transition duration-300 transform hover:scale-105 ">
             Mohd Shoaib
          </span>
        </div>
        <h2 className="justify-center mb-5 flex text-2xl  dark:text-gray-300 text-gray-950 ease-out hover:ease-in transition duration-300 transform hover:scale-105">
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit(login)} className="flex flex-col">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <button className=" w-full submit-btn btn btn-sm btn-outline dark:text-gray-300 text-gray-950 ease-out hover:ease-in transition duration-300 transform hover:scale-105 "
              type="submit">
              Sign in
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen text-center flex items-center justify-center text-xl lg:text-3xl">
      Please Wait...
    </div>
  );
}

export default Login;
