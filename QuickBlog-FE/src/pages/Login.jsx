// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link to="/">Blog App</Link>
        </h1>
        <h3 className="hover:text-red-500">
          <Link to="/register">Register</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">
            Login to your <span className="text-red-500">BlogApp</span> Account
          </h1>
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-black outline-0"
            placeholder="Enter Your Email"
          />
          <div className="relative w-full">
            {" "}
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 border-2 border-black outline-0"
              placeholder="Enter Your Password"
            />
            <span
              className="absolute right-4 top-4 cursor-pointer"
              onClick={togglePassword}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>

          <button className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black">
            Login
          </button>
          <div className="flex justify-center items-center space-x-3">
            <p>New Here?</p>{" "}
            <p className="text-gray-500 hover:text-red-500">
              <Link to="/register"> Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
