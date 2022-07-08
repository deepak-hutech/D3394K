import React from "react";
import About from "./About";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
// import { styled } from "styled-components";
const Home = () => {
  return (
    <div>
      <div>
        <About />
      </div>

      {/* carousel */}
      <h2 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl ml-16">
        Testimonials
      </h2>
      <div className="carousel h-52 mt-9 w-full testimonial">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="max-w-full p-4 text-gray-800 bg-white rounded-lg shadow-md  shadow-cyan-700/50">
            <div className="mb-2">
              <div className="h-3 text-3xl text-left text-indigo-600">“</div>
              <p className="px-4 text-center text-gray-600">
                The Landscaping Professionals were quick, courteous and very
                helpful. They helped me restore my lawn and gardens completely
                after putting in my deck. I was worried it wouldn’t be done in
                time for my garden party, but they finished the job with time to
                spare!”
              </p>
              <div className="h-3 text-3xl text-right text-indigo-600">”</div>
              <div className="text-center">
                <h5 className="font-bold text-indigo-600">John Doe</h5>
                <p className="text-sm text-gray-600">CEO / Founder</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="max-w-full p-4 text-gray-800 bg-white rounded-lg shadow-md  shadow-cyan-700/50">
            <div className="mb-2">
              <div className="h-3 text-3xl text-left text-indigo-600">“</div>
              <p className="px-4 text-center text-gray-600">
                The Landscaping Professionals were quick, courteous and very
                helpful. They helped me restore my lawn and gardens completely
                after putting in my deck. I was worried it wouldn’t be done in
                time for my garden party, but they finished the job with time to
                spare!”
              </p>
              <div className="h-3 text-3xl text-right text-indigo-600">”</div>
              <div className="text-center">
                <h5 className="font-bold text-indigo-600">John Doe</h5>
                <p className="text-sm text-gray-600">CEO / Founder</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="max-w-full p-4 text-gray-800 bg-white rounded-lg shadow-md  shadow-cyan-700/50">
            <div className="mb-2">
              <div className="h-3 text-3xl text-left text-indigo-600">“</div>
              <p className="px-4 text-center text-gray-600">
                The Landscaping Professionals were quick, courteous and very
                helpful. They helped me restore my lawn and gardens completely
                after putting in my deck. I was worried it wouldn’t be done in
                time for my garden party, but they finished the job with time to
                spare!”
              </p>
              <div className="h-3 text-3xl text-right text-indigo-600">”</div>
              <div className="text-center">
                <h5 className="font-bold text-indigo-600">John Doe</h5>
                <p className="text-sm text-gray-600">CEO / Founder</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="max-w-full p-4 text-gray-800 bg-white rounded-lg shadow-md  shadow-cyan-700/50">
            <div className="mb-2">
              <div className="h-3 text-3xl text-left text-indigo-600">“</div>
              <p className="px-4 text-center text-gray-600">
                The Landscaping Professionals were quick, courteous and very
                helpful. They helped me restore my lawn and gardens completely
                after putting in my deck. I was worried it wouldn’t be done in
                time for my garden party, but they finished the job with time to
                spare!”
              </p>
              <div className="h-3 text-3xl text-right text-indigo-600">”</div>
              <div className="text-center">
                <h5 className="font-bold text-indigo-600">John Doe</h5>
                <p className="text-sm text-gray-600">CEO / Founder</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Home;
