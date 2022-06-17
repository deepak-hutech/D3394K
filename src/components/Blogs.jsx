import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Blogs = () => {
  const dispatch = useDispatch();
  const postState = useSelector(state=>state.posts);
  return <div>
    
  </div>;
};

export default Blogs;
