import React from "react";
import Home from "../assets/icons/home";
import Notify from "../assets/icons/notify";
import Bookmark from "../assets/icons/book";
import Page from "../assets/icons/page";
import Write from "../assets/icons/write";
import PR from "../assets/icons/PR";
import Image from "../assets/images/image";


const Navbar = () => {
  return (
    <nav className="w-[10%] text-white flex flex-col items-center p-6 pt-[60px]">
      <ul className="flex flex-col gap-10 text-lg">
        <li className="flex flex-col items-center font-bold mb-20 hover:text-blue-400 transition">
          <PR className="w-8 h-8 mb-1" />
        </li>
        <li className="flex flex-col items-center hover:text-blue-400 transition">
          <Home className="w-8 h-8 mb-1" />
        </li>
        <li className="flex flex-col items-center hover:text-blue-400 transition">
          <Notify className="w-8 h-8 mb-1" />
        </li>
        <li className="flex flex-col items-center hover:text-blue-400 transition">
          <Bookmark className="w-8 h-8 mb-1" />
        </li>
        <li className="flex flex-col items-center hover:text-blue-400 transition">
          <Page className="w-8 h-8 mb-1" />
        </li>
        <li className="flex flex-col items-center hover:text-blue-400 transition">
          <Write className="w-8 h-8 mb-1" />
        </li>
        <li className="flex flex-col items-center hover:text-blue-400 transition ">
          <Image className=" w-5 h-5 mb-1" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
