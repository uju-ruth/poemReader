import React from "react";
import Navbar from "../component/navbar";
// import {FontAwesomeIcon}from '@fontawesome/react-fontawesome';
// import {faBars}from '@fontawesome/free-solid-svg-icons'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const HomePage = () => {
  const Toggle = () => {
    setIsVisible(prev => !prev)
  }  
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      <div onClick={Toggle}  className=" z-50 w-[100px] h-[100px] rounded-full flex justify-center items-center absolute top-2 right-1 lg:hidden">
          
          {isVisible ===true?(<FontAwesomeIcon icon ={faXmark}/>):(<FontAwesomeIcon icon ={faBars}/>) }
      </div>
      
      {isVisible && <div className="w-full h-[300px] bg-yellow-500 absolute top-0 right-0">
        </div>}
      {/* Navbar */}
      <div className=" hidden lg:flex w-full md:w-[10%] bg-gray-200">
        <Navbar />
      </div>
.
      {/* Main Content */}
      <div className=" w-full md:w-[60%] bg-white p-4 flex flex-col divide-y divide-dashed">
        {/* Row 1 */}
        <div className="flex flex-col items-center justify-center p-4 min-h-[150px]">
          {/* Content for Row 1 */}
          <p>Row 1 Content</p>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col items-center justify-center p-4 min-h-[150px]">
          {/* Content for Row 2 */}
          <p>Row 2 Content</p>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col items-center justify-center p-4 min-h-[150px]">
          {/* Content for Row 3 */}
          <p>Row 3 Content</p>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col items-center justify-center p-4 min-h-[150px]">
          {/* Content for Row 4 */}
          <p>Row 4 Content</p>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-[30%] bg-gray-100 p-8 flex flex-col items-center">
        <button className="mt-3 bg-blue-800 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition">
          Get unlimited access
        </button>
      </aside>
    </div>
  );
};

export default HomePage;
