// import React from 'react'

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ImCross } from "react-icons/im";

const EditPost = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const addCategory = () => {
    let updatedCategories = [...categories, category];
    setCategory("");
    setCategories(updatedCategories);
  };

  const deleteCategory = (i) => {
    let updatedCategories = [...categories];
    updatedCategories.splice(i, 1);
    setCategories(updatedCategories);
  };

  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl text-xl mt-8">Update the Post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
          <input
            className="px-4 py-2 outline-none"
            type="text"
            placeholder="enter you're post title"
          />
          <input
            className="px-4 py-2 outline-none"
            type="file"
            placeholder="enter you're post title"
          />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                type="text"
                className="px-4 py-2 outline-none"
                placeholder="Enter Post Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <div
                className="bg-black text-white px-4 py-2 font-semibold cursor-pointer"
                onClick={addCategory}
              >
                Add
              </div>
            </div>
            {/* categories */}
            <div className="flex px-4 mt-3">
              {categories?.map((c, i) => (
                <div
                  className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
                  key={i}
                >
                  <p>{c}</p>
                  <p
                    className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"
                    onClick={() => deleteCategory(i)}
                  >
                    <ImCross />
                  </p>
                </div>
              ))}
            </div>
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="15"
            className="px-4 py-2 outline-none"
            placeholder="Enter Your Post description"
          />
          <button className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg">
            Update
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditPost;
