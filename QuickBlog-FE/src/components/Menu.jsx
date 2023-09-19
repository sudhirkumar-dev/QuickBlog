// import React from 'react'

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { URL } from "../utilities/url";
import axios from "axios";

const Menu = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogout = async () => {
    try {
      const res = await axios.get(URL + "/api/auth/logout", {
        withCredentials: true,
      });
      setUser(null);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-white w-[200px] flex flex-col items-start absolute top-12 md:right-32 right-6 rounded-md p-4 border-4 border-red-200 space-y-4">
      {!user && (
        <h3 className="text-black text-sm hover:text-red-500 cursor-pointer">
          Login
        </h3>
      )}
      {!user && (
        <h3 className="text-black text-sm hover:text-red-500 cursor-pointer">
          Register
        </h3>
      )}
      {user && (
        <h3 className="text-black text-sm hover:text-red-500 cursor-pointer">
          Profile
        </h3>
      )}{" "}
      {user && (
        <h3 className="text-black text-sm hover:text-red-500 cursor-pointer">
          Create
        </h3>
      )}{" "}
      {user && (
        <h3 className="text-black text-sm hover:text-red-500 cursor-pointer">
          My Blogs
        </h3>
      )}
      {user && (
        <h3
          onClick={handleLogout}
          className="text-black text-sm hover:text-red-500 cursor-pointer"
        >
          Logout
        </h3>
      )}
    </div>
  );
};

export default Menu;
