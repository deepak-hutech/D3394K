import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { commentSchema } from "../components/CommentValidation";
import styled from "styled-components";

const AddComments = () => {
  const [data, setData] = useState();
  const [errorMessage, setErrorMessage] = useState("hidden");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      description: e.target[0].value,
    };
    setData(formData);
    const isValid = await commentSchema.isValid(formData);

    setErrorMessage(isValid);

    if (isValid) {
      setErrorMessage("hidden");
    } else {
      setErrorMessage("visible");
    }
  };
  console.log(errorMessage);

  // dispatch data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "ADDCOMMENTS_POST_REQUESTED", payload: data });
  });

  // styled components
  const Wrapper = styled.div`
    .error-message {
      color: red;
      visibility: ${errorMessage};
    }
  `;

  return (
    <Wrapper>
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
            Add Comment
          </button>
        </form>
        <p className="error-message mt-10">
          Please use more than 10 characters
        </p>
      </div>
    </Wrapper>
  );
};

export default AddComments;
