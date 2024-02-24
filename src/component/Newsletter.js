import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[800px] mx-auto grid md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow ?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4 ml-6">
          <div className=" sm:flex flex-row items-center  w-full ">
            <input
              className="w-full  p-3 rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            ></input>
            <button className="bg-[#00df9a] text-black mx-auto  w-[200px] rounded-md font-medium ml-4 my-6 py-2 ">
              Notify Me
            </button>
          </div>
          <p>
            We protect your data. Read{" "}
            <span className="text-[#00df9a] underline">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
