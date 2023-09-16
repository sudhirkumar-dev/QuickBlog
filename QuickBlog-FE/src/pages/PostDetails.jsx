// import React from 'react'

import Comment from "../components/Comment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            Title of the post
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p className="">
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@sudhirWeb dev</p>
          <div className="flex space-x-2">
            <p>16/6/2023</p>
            <p>16:45</p>
          </div>
        </div>
        <img src="" alt="" className="w-full mx-auto mt-8" />
        <p className="mx-auto mt-8">Post description</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Machines</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          {/*Comment*/}
          <Comment />
          <Comment />
        </div>
        {/* write a comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
            type="text"
            placeholder="Write a comment"
            className="md:w-[80%] outline-none px-4 mt-4 md:mt-0"
          />
          <button className="bg-black text-sm text-white px-4 py-2 md:w-[30%] mt-4 md:mt-0">
            Add Comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
