import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1000px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl text-[#00df9a]">REACT</h1>
        <p className="py-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          repudiandae illo laudantium delectus ullam, doloribus ad voluptatem
          reprehenderit mollitia error harum maiores doloremque autem, quis
          veniam, consequatur laboriosam ratione explicabo.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 ">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="md:col-span-2 flex justify-between mt-[2rem] ">
        <div>
          <h1 className="font-medium text-gray-400 ">Solutions</h1>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-gray-400 ">Support</h1>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Api Status</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-gray-400 ">Company</h1>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blogs</li>
            <li className="py-2 text-sm">Job</li>
            <li className="py-2 text-sm">Press</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-gray-400 ">Legal</h1>
          <ul>
            <li className="py-2 text-sm">Claims</li>
            <li className="py-2 text-sm">Terms</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Insurance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
