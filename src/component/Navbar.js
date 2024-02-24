import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className=" flex  items-center h-24 max-w-[750px] mx-auto px-4 text-white ">
        <h1 className="w-full text-3xl text-[#00df9a]">REACT</h1>
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">Accounts</li>
          <li className="p-4">About</li>
        </ul>
        <div onClick={handleNav} className="md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[30%] border-r h-full ease-in-out duration-500 border-r-gray-900 bg-[#0c0c0d]"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl text-[#00df9a] m-4">REACT</h1>

          <ul className="pt-4 uppercase">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Resources</li>
            <li className="p-4 border-b border-gray-600">Accounts</li>
            <li className="p-4">About</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
