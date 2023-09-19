import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { URL } from "../utilities/url";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleRegister = async () => {
    setError(false);
    try {
      let res = await axios.post(URL + "/api/auth/register", {
        username,
        email,
        password,
      });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      navigate("/login");
    } catch (er) {
      setError(true);
      console.log(er);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold text-red-500">
          <Link to="/">Quick Blog</Link>
        </h1>
        <h3 className="hover:text-red-500">
          <Link to="/login">Login</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">
            Create your own <span className="text-red-500">Quick Blog</span>{" "}
            Account
          </h1>
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-black outline-0"
            placeholder="Enter Your username"
            onChange={(e) => setUsername(e.target.value)}
          />
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
            className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-red-500 hover:text-white"
            onClick={handleRegister}
          >
            Register
          </button>
          {error && (
            <h3 className="text-red-500 text-sm">Something went wrong</h3>
          )}
          <div className="flex justify-center items-center space-x-3">
            <p>Already have an account?</p>{" "}
            <p className="text-gray-500 hover:text-red-500">
              <Link to="/login"> login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
