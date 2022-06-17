import React from "react";

function Subscribe() {
  return (
    <>
      <div className="py-20 bg-white-300 px-2 mt-9 subscriber">
        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full p-3">
              <div className="relative">
                {" "}
                <input
                  type="text"
                  className="bg-gray-300 h-14 w-full px-4 pr-20 rounded-md focus:outline-none hover:cursor-pointer"
                  name=""
                />
                <button className="h-10 rounded bg-gray-800 absolute top-2 text-sm right-2 px-3 text-white hover:bg-gray-900 ">
                  Subscribe Now
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default Subscribe;
