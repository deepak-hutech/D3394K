import React, { useEffect, useState } from "react";
import "../App.css";

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Gallery = () => {
  const [spinner, setSpinner] = useState(false);
  const [isActive, setIsActive] = useState("");
  let [indexId, setIndexId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setSpinner(true);
    dispatch({ type: "PHOTOS_FETCH_REQUESTED" });
    setSpinner(false);
  }, []);

  const fetchRequestData = useSelector(
    (state) => state?.counter?.listPhotos?.result
  );
  console.log(fetchRequestData);
  const fetchRequestPending = useSelector(
    (state) => state?.counter?.listPhotos?.fetching
  );
  console.log(fetchRequestPending);
  const fetchRequestError = useSelector(
    (state) => state?.counter?.listPhotos?.error
  );

  console.log(fetchRequestError);

  if (!fetchRequestData) return null;

  const pageSize = 20;
  const page = 1;
  // const pages = Math.ceil(allPhotos.length / pageSize);

  const pageData = fetchRequestData.slice(
    page * pageSize - pageSize,
    page * pageSize
  );
  console.log(pageData);

  const zoomImage = (e) => {
    setIsActive("active");
  };

  return (
    <Wrapper className="gallery">
      <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/1">
              {pageData.map((movie, index) => (
                <div
                  className={`w-1/4 p-1 md:p-2  images${index + 1} `}
                  onClick={zoomImage}
                >
                  <img
                    alt="gallery"
                    className={`block object-cover object-center w-full h-full rounded-lg  ${isActive} `}
                    src={movie.thumbnailUrl}
                    key={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Gallery;

const Wrapper = styled.div``;
