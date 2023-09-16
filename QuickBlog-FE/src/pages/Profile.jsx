// import React from 'react'

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ProfilePosts } from "../components/ProfilePosts";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
        {/* right */}
        <div className="flex flex-col md:w-[70%] w-full">
          <h1 className="text-xl font-bold mb-4">Your Posts</h1>
          <ProfilePosts />
          <ProfilePosts />
          <ProfilePosts />
          <ProfilePosts />
          <ProfilePosts />
          <ProfilePosts />
          <ProfilePosts />
        </div>
        {/* left */}
        <div className="md:sticky md:top-16 flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end">
          <div className="flex flex-col space-y-4 items-start mt-8 md:mt-0">
            {" "}
            <h1 className="text-xl font-bold mb-4">Profile</h1>
            <input
              type="text"
              placeholder="Your Username"
              className="outline-none px-4 py-2 text-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none px-4 py-2 text-gray-500"
            />
            <input
              type="password"
              placeholder="Your Password"
              className="outline-none px-4 py-2 text-gray-500"
            />
            <div className="flex items-center space-x-4 mt-8">
              <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">
                Update
              </button>
              <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
