import React from "react";
import Laptop from "../Assets/laptop.jpeg";

const Analytics = () => {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-[1250px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[450px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold "> DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centerally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
            repellat distinctio! Eveniet a quisquam, accusamus earum molestias
            quas porro iste reiciendis non , quod ut aperiam voluptate voluptas
            ducimus nobis? Natus.
          </p>
          <button className="bg-black text-[#00df9a] mx-auto md:mx-0 w-[200px] rounded-md font-medium my-6 py-2 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
