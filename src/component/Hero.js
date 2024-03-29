import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] p-2 font-bold">
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
            Grow with data{" "}
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-2 md:pb-4">
              {" "}
              Fast,flexible financing for{" "}
            </p>
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={120}
              backSpeed={130}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Monitor your data analytics for increase revenue in BTB , BTC , SASS
            .
          </p>
          <button className="bg-[#00df9a] text-black mx-auto w-[200px] rounded-md font-medium my-6 py-2 ">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
