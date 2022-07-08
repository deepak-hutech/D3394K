import React, { useState } from "react";
import { userSchema } from "./UserValidation";
import * as yup from "yup";
import styled from "styled-components";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ContactUs = () => {
  const [errorMessage, setErrorMessage] = useState("none");
  const createUser = async (e) => {
    e.preventDefault();
    let formData = {
      name: e.target[0].value,
      requests: e.target[1].value,
      phone: e.target[2].value,
      email: e.target[3].value,
      message: e.target[4].value,
    };

    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
    if (isValid === false) {
      setErrorMessage("block");
    } else {
      setErrorMessage("none");
    }
    console.log(formData);
  };

  const Wrapper = styled.div`
    .error-message {
      display: ${errorMessage};
    }
    height: 81vh;
  `;

  return (
    <Wrapper>
      <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-full h-screen">
        <form onSubmit={createUser}>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Name (min-3 max-15)"
            />
          </div>

          {/*  */}
          <div className="form-group mb-6">
            <label for="cars">Request type</label>
            <select
              id="cars"
              name="cars"
              className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              <option value="Sale">Sale</option>
              <option value="customer-care">customer care</option>
              <option value="general-query">general query</option>
            </select>
          </div>
          {/*  */}
          <div className="form-group mb-6">
            <input
              type="tel"
              className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Email address"
            />
          </div>
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
              placeholder="Message"
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
            Send
          </button>
        </form>
        <div className="error-message mt-4">Give the valid credentials !!</div>
      </div>
    </Wrapper>
  );
};

export default ContactUs;
