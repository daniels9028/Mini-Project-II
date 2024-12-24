import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

import CommentList from "../components/CommentList";

const DetailUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const [pages, setPages] = useState({
    page: 1,
    skip: 0,
    total: 0,
    limit: 10,
  });

  const [comment, setComment] = useState({
    body: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState("");

  const [modal, setModal] = useState(false);

  const getDetailUser = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllComments = async () => {
    setLoad(true);
    try {
      const res = await axios.get(
        `https://dummyjson.com/comments?limit=${pages.limit}&skip=${pages.skip}`
      );

      setTimeout(() => {
        setLoad(false);
        setComments(res.data.comments);
        setPages({
          ...pages,
          total: res.data.total,
          skip: res.data.skip,
        });
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  const changeComment = (e) => {
    setComment({ ...comment, body: e.target.value });
  };

  const addComment = async () => {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await axios.post("https://dummyjson.com/comments/add", {
        body: comment.body,
        postId: 3,
        userId: 5,
      });

      setSuccess("Comment was successfully add!");
      setComment({ ...comment, body: "" });
    } catch (error) {
      setError("Invalid comment!");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setPages({ ...pages, page: pages.page - 1, skip: pages.skip - 10 });
  };

  const handleNext = () => {
    setPages({ ...pages, page: pages.page + 1, skip: pages.skip + 10 });
  };

  useEffect(() => {
    document.title = "Detail User | TeeSpace";
    getDetailUser();
    getAllComments();
  }, []);

  useEffect(() => {
    getAllComments();
  }, [pages.skip]);

  return (
    <>
      <Navbar />
      {modal && (
        <div className="fixed z-50 w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="p-4 bg-white border rounded-lg shadow-lg">
              <p className="text-lg font-medium text-red-500">
                Comment deleted was successfully
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="w-full p-5 mt-20 bg-gray-200 lg:p-10">
        <div className="container min-h-screen p-5 mx-auto bg-white rounded-xl lg:p-10">
          <div className="flex flex-col items-center justify-center py-10">
            <h3 className="text-2xl font-bold">Detail User</h3>
            <div className="relative flex flex-col items-center justify-center w-full p-5 mt-10 overflow-hidden bg-gray-300 border border-gray-400 shadow-lg lg:w-1/2 rounded-xl right-2">
              {/* <div className="absolute flex items-center justify-center gap-2 top-2 right-2">
                <div className="p-1.5 bg-yellow-500 shadow-md rounded-xl cursor-pointer hover:bg-yellow-600">
                  <CiEdit size={24} />
                </div>
                <div className="p-1.5 bg-red-500 shadow-md rounded-xl cursor-pointer hover:bg-red-600">
                  <MdDeleteOutline size={24} />
                </div>
              </div> */}
              <img
                src={user?.avatar}
                alt={user?.id}
                className="object-cover w-32 border border-gray-400 rounded-full"
              />
              <p className="mt-4 text-xl font-bold text-center">
                {user?.first_name} {user?.last_name}
              </p>
              <p className="mt-4 text-lg font-medium text-center">
                {user?.email}
              </p>
              <Link to="/users">
                <button className="px-6 py-2 mt-4 tracking-wider transition-all bg-white border border-black rounded-full hover:bg-gray-200">
                  Kembali
                </button>
              </Link>
            </div>
            <div className="flex flex-col justify-center w-full p-5 mt-10 overflow-hidden bg-white border shadow-lg rounded-xl right-2">
              <p className="mb-10 text-xl font-semibold border-b-2 border-black">
                Comments
              </p>
              {success && <p className="mb-4 text-blue-500">{success}</p>}
              {error && <p className="mb-4 text-red-500">{error}</p>}
              <div className="p-4 mb-4 bg-gray-200 border border-black rounded-md">
                <div className="flex flex-row items-center gap-4">
                  <FaRegUserCircle size={30} />
                  <p className="font-bold">Daniel</p>
                </div>
                <p className="pb-4 mt-4 font-medium border-b border-gray-500">
                  <textarea
                    type="text"
                    onChange={changeComment}
                    value={comment.body}
                    className="w-full p-4 text-sm border-2 rounded-md outline-none focus:border-blue-500"
                    placeholder="Your comment"
                  ></textarea>
                </p>
                <button
                  className="float-right px-4 py-2 mt-4 bg-white border border-black rounded-full disabled:bg-gray-400"
                  onClick={addComment}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Comment"}
                </button>
              </div>
              {load
                ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <CommentList load={load} />
                  ))
                : comments.map((comment) => (
                    <CommentList
                      comment={comment}
                      key={comment.id}
                      getAllComments={getAllComments}
                      setModal={setModal}
                    />
                  ))}
              <div className="flex flex-row items-center justify-center gap-10 mt-10 ">
                <button
                  className="px-4 py-2 font-medium tracking-wider bg-white border border-black rounded-full disabled:bg-gray-200 disabled:cursor-not-allowed"
                  disabled={pages.page === 1}
                  onClick={handleBack}
                >
                  Back
                </button>
                <div className="flex flex-row items-center gap-2">
                  <p>{pages.page}</p> <p>of</p>{" "}
                  <p>{pages.total / pages.limit}</p>
                </div>
                <button
                  className="px-4 py-2 font-medium tracking-wider bg-white border border-black rounded-full disabled:bg-gray-200 disabled:cursor-not-allowed"
                  onClick={handleNext}
                  disabled={Math.ceil(pages.total / pages.limit) === pages.page}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailUser;
