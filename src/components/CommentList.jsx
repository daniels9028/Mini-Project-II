import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";

const CommentList = ({ comment, getAllComments, setModal, load }) => {
  const [menu, setMenu] = useState(false);

  const handleDeleteComment = async (id) => {
    try {
      const res = await axios.delete(`https://dummyjson.com/comments/${id}`);

      setMenu(!menu);
      setModal(true);
      getAllComments();

      setTimeout(() => {
        setModal(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className={`relative p-4 mb-4 bg-gray-200 border border-black rounded-md ${
          load && "animate-pulse"
        }`}
        key={comment?.id}
      >
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <FaRegUserCircle size={30} />
            <p className="font-bold">{comment?.user?.fullName}</p>
          </div>
          <BsThreeDotsVertical
            className="cursor-pointer"
            onClick={() => setMenu(!menu)}
          />
        </div>
        {menu && (
          <div className="absolute p-4 space-y-2 bg-gray-300 rounded-lg right-6 top-10">
            <CiEdit
              size={30}
              className="p-1 bg-yellow-500 rounded-lg cursor-pointer"
            />
            <MdDeleteOutline
              size={30}
              className="p-1 bg-red-500 rounded-lg cursor-pointer"
              onClick={() => handleDeleteComment(comment?.id)}
            />
          </div>
        )}
        <p className="pb-4 mt-4 font-medium border-b border-gray-500">
          {comment?.body}
        </p>
        <div className="flex flex-row items-center gap-4 mt-4">
          <div className="flex flex-row items-center gap-1">
            <AiOutlineLike size={20} />
            <p>{comment?.likes}</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <AiOutlineDislike size={20} />
          </div>
          <p>{comment && "5 min ago"}</p>
        </div>
      </div>
    </>
  );
};

export default CommentList;
