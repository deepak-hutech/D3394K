import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const AddComments = () => {
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      description: e.target[0].value,
    };
    setData(formData);
  };
  console.log(data);

  // dispatch data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "ADDCOMMENTS_POST_REQUESTED", payload: data });
  });
  return (
    <div>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-full mb-52">
        <h1 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-normal text-center text-black mb-3">
          Add you comments here
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Description"
            ></textarea>
          </div>

          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddComments;
