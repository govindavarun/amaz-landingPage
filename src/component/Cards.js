import React from "react";
import single from "../Assets/single.jpeg";
import double from "../Assets/double.jpeg";
import triple from "../Assets/triple.jpeg";
const Cards = () => {
  return (
    <div className="bg-white w-full py-[3rem] px-[5rem]">
      <div className="max-w-[900px] grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl my-4 py-4 flex flex-col hover:scale-110 duration-300 ">
          <img
            className="w-24 mx-auto mt-[-3rem] bg-white"
            src={single}
            alt="/"
          />
          <h2 className="font-bold text-2xl text-center py-6">Single User</h2>
          <p className="font-bold text-4xl text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 mt-6 ">500 GB storage</p>
            <p className="py-2 ">1 Granted User</p>
            <p className="py-2 ">Send Upto 2 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] mx-auto md:mx-0 px-6  rounded-md font-medium my-6 py-2 ">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl my-4 py-4 flex flex-col hover:scale-110 duration-300 ">
          <img
            className="w-24 mx-auto mt-[-3rem] bg-white"
            src={double}
            alt="/"
          />
          <h2 className="font-bold text-2xl text-center py-6">Double User</h2>
          <p className="font-bold text-4xl text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 mt-6 ">500 GB storage</p>
            <p className="py-2 ">1 Granted User</p>
            <p className="py-2 ">Send Upto 2 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] mx-auto md:mx-0 px-6  rounded-md font-medium my-6 py-2 ">
            Start Trial
          </button>
        </div>{" "}
        <div className="w-full shadow-xl my-4 py-4 flex flex-col hover:scale-110 duration-300 ">
          <img
            className="w-24 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt="/"
          />
          <h2 className="font-bold text-2xl text-center py-6">Triple User</h2>
          <p className="font-bold text-4xl text-center">$149</p>
          <div className="font-medium text-center">
            <p className="py-2 mt-6 ">500 GB storage</p>
            <p className="py-2 ">1 Granted User</p>
            <p className="py-2 ">Send Upto 2 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] mx-auto md:mx-0 px-6  rounded-md font-medium my-6 py-2 ">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
