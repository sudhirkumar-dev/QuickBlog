// import React from 'react'
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { URL } from "../utilities/url";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useContext(UserContext);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      let res = await axios.post(
        URL + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      setUser(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold text-red-500">
          <Link to="/">Quick Blog</Link>
        </h1>
        <h3 className="hover:text-red-500">
          <Link to="/register">Register</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">
            Login to your <span className="text-red-500">Quick Blog</span>{" "}
            Account
          </h1>
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-black outline-0"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative w-full">
            {" "}
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 border-2 border-black outline-0"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-4 top-4 cursor-pointer"
              onClick={togglePassword}
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>

          <button
            onClick={handleLogin}
            className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-red-500 hover:text-white"
          >
            Login
          </button>
          {error && (
            <h3 className="text-red-500 text-sm">Something went wrong</h3>
          )}

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
