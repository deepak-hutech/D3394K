import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const LatestBlogs = () => {
  const [data, setData] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setSpinner(true);
    dispatch({ type: "COMMENT_FETCH_REQUESTED" });
    setSpinner(false);
  }, []);
  const postState = useSelector(
    (state) => state?.counter?.listComments?.result
  );
  console.log(postState);
  if (!postState) return null;
  console.log(postState);

  const pageSize = 5;
  const page = 1;
  const pageData = postState.slice(page * pageSize - pageSize, page * pageSize);
  console.log(pageData);
  return (
    <>
      <div className="flex flex-col mb-52 ml-2">
        <div className="blog-container">
          {pageData?.map((blogs) => (
            <>
              <div className="blog-container flex">
                <p className="xl:px-10 md:px-2 px-7 text-2sm font-semibold leading-normal  text-black mb-3">
                  {`comment${blogs?.id}.`}
                </p>
                <h1 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-normal  text-black mb-3">
                  {blogs?.body}
                </h1>
                <Link
                  to="/blogs/allcomments"
                  className="flex items-center float-right mr-2"
                >
                  <div className="flex space-x-2 justify-center">
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      View All Comments
                    </button>
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestBlogs;
