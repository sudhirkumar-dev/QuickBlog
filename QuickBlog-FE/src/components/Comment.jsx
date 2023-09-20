/* eslint-disable react/prop-types */
// import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { URL } from "../utilities/url";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Comment = ({ comment, onDeleteComment }) => {
  // console.log("cmnt", comment);
  const { user } = useContext(UserContext);
  const deleteComment = async (id) => {
    try {
      let res = await axios.delete(URL + "/api/comments/" + id, {
        withCredentials: true,
      });
      onDeleteComment(id);
      console.log("res", res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-600">{comment?.author}</h3>
        <div className="flex justify-center items-center space-x-4">
          <p className="text-gray-500 text-sm">
            {new Date(comment.updatedAt).toString().slice(0, 15)}
          </p>
          <p className="text-gray-500 text-sm">
            {new Date(comment.updatedAt).toString().slice(16, 24)}
          </p>{" "}
          {user?._id === comment?.userId && (
            <div className="flex items-center justify-center space-x-2">
              <p className="hover:text-red-500">
                <BiEdit />
              </p>
              <p className="hover:text-red-500">
                <MdDelete onClick={() => deleteComment(comment._id)} />
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="px-4 mt-2">{comment?.comment}</p>
    </div>
  );
};

export default Comment;
