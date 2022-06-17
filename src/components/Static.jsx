import React from "react";

const Static = () => {
  return (
    <div>
      <section className="py-12 md:py-20 px-6 md:px-0 bg-white">
        <div className="m-auto max-w-default">
          <div className="text-center">
            <h2 className="md:text-5xl text-3xl text-gray-800 font-bold">
              {" "}
              Frequent Questions
            </h2>
          </div>
          <div className="mt-10 md:mt-16">
            <div className="md:max-w-3xl m-auto">
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  This is a first question
                </summary>
                <p className="py-2 px-3 text-gray-600">
                  This is a sample accordion answer
                </p>
              </details>
              <details className="border-b-2">
                <summary className="p-4 text-gray-800 font-bold cursor-pointer pt-5 mb-1 text-lg focus:text-blue-700">
                  This is a second question
                </summary>
                <p className="py-2 px-3 text-gray-600">
                  This is a sample accordion answer
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Static;
