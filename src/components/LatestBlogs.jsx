import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const LatestBlogs = () => {
  const [data, setData] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setSpinner(true);
    dispatch({ type: "USER_FETCH_REQUESTED" });
    setSpinner(false);
  }, []);
  const postState = useSelector((state) => state?.counter?.listPost?.result);

  if (!postState) return null;
  console.log(postState);

  const pageSize = 7;
  const page = 1;
  const pageData = postState.slice(page * pageSize - pageSize, page * pageSize);
  console.log(pageData);
  return (
    <div className="flex flex-col mb-52 ml-2">
      <div className="blog-container">
        {pageData?.map((blogs) => (
          <>
            <div className="blog-container flex">
              <p className="xl:px-10 md:px-2 px-7 text-2md font-semibold leading-normal  text-black mb-3">
                {`Blog ${blogs?.id}.`}
              </p>
              <h1 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-normal  text-black mb-3">
                {blogs?.title}
              </h1>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
