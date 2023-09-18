// import React from 'react'

const Menu = () => {
  const user = true;
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
        <h3 className="text-black text-sm hover:text-red-500 cursor-pointer">
          Logout
        </h3>
      )}
    </div>
  );
};

export default Menu;
