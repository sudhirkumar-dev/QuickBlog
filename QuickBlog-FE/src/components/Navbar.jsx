import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import React, { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [prompt, setPrompt] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;
  // console.log(param).pa;
  let { user } = useContext(UserContext);
  const handleSearch = () => {
    navigate(prompt ? "?search=" + prompt : navigate("/"));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold text-red-500 ">
        <Link to="/">Quick Blog</Link>
      </h1>
      {path === "/" && (
        <div className="flex justify-center items-center space-x-0">
          <p className="cursor-pointer" onClick={handleSearch}>
            <BsSearch />{" "}
          </p>
          <input
            type="text"
            placeholder="Search a Post"
            className="outline-none px-3"
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      )}
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (
          <h3 className="hover:text-red-500">
            <Link to="/create">Create a Post</Link>
          </h3>
        ) : (
          <h3 className="hover:text-red-500">
            <Link to="/login">Login</Link>
          </h3>
        )}
        {user ? (
          <React.Fragment>
            {" "}
            <p
              className="cursor-pointer hover:text-red-500 relative"
              onClick={() => setShowMenu(!showMenu)}
            >
              <FaBars />
            </p>
            {showMenu && <Menu />}
          </React.Fragment>
        ) : (
          <h3 className="hover:text-red-500">
            <Link to="/register">Register</Link>
          </h3>
        )}
      </div>
      <div className="md:hidden text-lg" onClick={() => setShowMenu(!showMenu)}>
        <p className="cursor-pointer relative hover:text-red-500">
          <FaBars />
        </p>
        {showMenu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
