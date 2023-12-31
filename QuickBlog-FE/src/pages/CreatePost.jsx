// import React from 'react'

import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ImCross } from "react-icons/im";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../utilities/url";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  // console.log(categories);
  const navigate = useNavigate();
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

  const handleCreate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      description,
      username: user.username,
      userId: user._id,
      categories: categories,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      console.log(file, filename);
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;
      console.log(data);
      //img upload
      try {
        const imgUpload = await axios.post(URL + "/api/upload", data);
        console.log(imgUpload?.data);
      } catch (err) {
        console.log(err);
      }
    }
    //post upload
    console.log(post);
    try {
      const res = await axios.post(URL + "/api/posts/create", post, {
        withCredentials: true,
      });
      navigate("/posts/post/" + res?.data._id);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl text-xl mt-8">Create a Post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
          <input
            className="px-4 py-2 outline-none"
            type="text"
            placeholder="enter you'r post title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="px-4 py-2 outline-none"
            type="file"
            placeholder="enter you'r post title"
            onChange={(e) => setFile(e.target.files[0])}
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
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            onClick={handleCreate}
            className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg"
          >
            Create
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
