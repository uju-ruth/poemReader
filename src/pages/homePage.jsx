import React from "react";
import Navbar from "../component/navbar";
// import {FontAwesomeIcon}from '@fontawesome/react-fontawesome';
// import {faBars}from '@fontawesome/free-solid-svg-icons'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AddIcon from "../assets/icons/addIcon";
import SaveIcon from "../assets/icons/saveIcon";
import LikeIcon from "../assets/icons/likeIcon";
import PoemImage from "../assets/images/poemImage.jpg"
import Author1 from "../assets/images/Author.png";
import { Link, useNavigate } from "react-router-dom";
import {Search} from 'lucide-react'




const HomePage = () => {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
 

  const Toggle = () => {
    setIsVisible(prev => !prev)
  }  

  //Toggle the state of the icon when clicked
  const toggleSave = () => setSaved((prev) => !prev);
  const toggleLike = () => setLiked((prev) => !prev);
  
  const categories = ["Romance", "African", "Power", "Adventure", "Art", "Mindfullness", "Yada Yada"]

  const navigate = useNavigate();
  const handleSubscription = (e) => {
    e.preventDefault()
    navigate('/subscription')
  }

  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      <div onClick={Toggle}  className=" z-50 w-[100px] h-[100px] rounded-full flex justify-center items-center absolute top-2 right-1 lg:hidden ">
          
          {isVisible ===true?(<FontAwesomeIcon icon ={faXmark}/>):(<FontAwesomeIcon icon ={faBars}/>) }

      </div>
      
      {isVisible && <div className=" lg:hidden w-[40%] h-full bg-gray-200 fixed top-0 right-0">
                    <Navbar/>
        </div>}
      {/* Navbar */}
      <div className="h-screen hidden lg:flex w-full md:w-[10%] bg-gray-200">

      </div>
      <div className=" fixed h-screen top-0 left-0 hidden lg:flex w-full md:w-[10%] bg-gray-200">
        <Navbar />
      </div>
.
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-7">
          {/* Top Add Section */}
          <div className="flex items-center gap-2 mb-6">
            <AddIcon />
            <span className="text-sm">
              Keep up with the latest in any topic
            </span>
          </div>

          {/* Following | Recommended */}
          <div className="flex gap-6 mb-6 border-b font-roboto ">
            <button className="pb-3 text-[#757575] font-thin">Following</button>
            <button className="pb-3 text-[#292929] font-medium">
              Recommended
            </button>
          </div>

          {/* Posts */}
          <div className="space-y-10">
            {/* Post 1 */}
            <div className="flex flex-col md:flex-row border-b pb-6">
              <div className="flex-1">
                <div className="w-full md:w-[80%] mb-4">
                  <div className="flex items-center gap-2 font-roboto text-sm mb-4">
                    <img src={Author1} alt="author" className="w-6 h-6" />
                    <span className="text-[#292929]">Amit Das</span>
                    <span className="text-[#757575]">·</span>
                    <span className="text-[#757575]">4 days ago</span>
                  </div>

                  <h2 className="text-xl font-semibold font-roboto mb-2">
                    Ten Little Birds Flying High in the Sky
                  </h2>

                  <p className="text-[#292929] mb-4 text-sm font-roboto">
                    An intense way to learn about the process and p Ge slake
                    kills jealous — My 1st hackathon Hackathons have been on my
                    mind since I heard it was a good way to gain experience as a
                    junior . As many that does work earns...
                  </p>

                  <div className="flex flex-wrap justify-between gap-4">
                    <div className="text-xs text-[#757575] font-roboto flex gap-2 items-center">
                      <span className="bg-[#F2F2F2] px-2 py-1 rounded-full text-[#292929]">
                        Foke Tale
                      </span>
                      <span>3 min read</span>
                      <span>·</span>
                      <span>Selected for you</span>
                    </div>

                    <div className="flex items-center gap-4 text-[#757575]">
                      <button
                        onClick={toggleSave}
                        className={saved ? "text-[#044AB1]" : "text-[#757575]"}
                      >
                        <SaveIcon />
                      </button>
                      <button
                        onClick={toggleLike}
                        className={liked ? "text-[#044AB1]" : "text-[#757575]"}
                      >
                        <LikeIcon />
                      </button>
                      <button>
                        {/* <CommentIcon /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-32 h-32 flex-shrink-0">
                <img
                  src={PoemImage}
                  alt="poem"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Post 2 */}
            <div className="flex flex-col md:flex-row border-b pb-6">
              <div className="flex-1">
                <div className="w-full md:w-[80%] mb-4">
                  <div className="flex items-center gap-2 font-roboto text-sm mb-4">
                    <img src={Author1} alt="author" className="w-6 h-6" />
                    <span className="text-[#292929]">Amit Das</span>
                    <span className="text-[#757575]">·</span>
                    <span className="text-[#757575]">4 days ago</span>
                  </div>

                  <h2 className="text-xl font-semibold font-roboto mb-2">
                    Ten Little Birds Flying High in the Sky
                  </h2>

                  <p className="text-[#292929] mb-4 text-sm font-roboto">
                    An intense way to learn about the process and p Ge slake
                    kills jealous — My 1st hackathon Hackathons have been on my
                    mind since I heard it was a good way to gain experience as a
                    junior . As many that does work earns...
                  </p>

                  <div className="flex flex-wrap justify-between gap-4">
                    <div className="text-xs text-[#757575] font-roboto flex gap-2 items-center">
                      <span className="bg-[#F2F2F2] px-2 py-1 rounded-full text-[#292929]">
                        Foke Tale
                      </span>
                      <span>3 min read</span>
                      <span>·</span>
                      <span>Selected for you</span>
                    </div>

                    <div className="flex items-center gap-4 text-[#757575]">
                      <button>
                        <SaveIcon />
                      </button>
                      <button>
                        <LikeIcon />
                      </button>
                      <button>
                        {/* <CommentIcon /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-32 h-32 flex-shrink-0">
                {/* Image can be added if needed */}
              </div>
            </div>

            {/* Post 3 */}
            <div className="flex flex-col md:flex-row border-b pb-6">
              <div className="flex-1">
                <div className="w-full md:w-[80%] mb-4">
                  <div className="flex items-center gap-2 font-roboto text-sm mb-4">
                    <img src={Author1} alt="author" className="w-6 h-6" />
                    <span className="text-[#292929]">Amit Das</span>
                    <span className="text-[#757575]">·</span>
                    <span className="text-[#757575]">4 days ago</span>
                  </div>

                  <h2 className="text-xl font-semibold font-roboto mb-2">
                    Ten Little Birds Flying High in the Sky
                  </h2>

                  <p className="text-[#292929] mb-4 text-sm font-roboto">
                    An intense way to learn about the process and p Ge slake
                    kills jealous — My 1st hackathon Hackathons have been on my
                    mind since I heard it was a good way to gain experience as a
                    junior . As many that does work earns...
                  </p>

                  <div className="flex flex-wrap justify-between gap-4">
                    <div className="text-xs text-[#757575] font-roboto flex gap-2 items-center">
                      <span className="bg-[#F2F2F2] px-2 py-1 rounded-full text-[#292929]">
                        Foke Tale
                      </span>
                      <span>3 min read</span>
                      <span>·</span>
                      <span>Selected for you</span>
                    </div>

                    <div className="flex items-center gap-4 text-[#757575]">
                      <button>
                        <SaveIcon />
                      </button>
                      <button>
                        <LikeIcon />
                      </button>
                      <button>
                        {/* <CommentIcon /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-32 h-32 flex-shrink-0">
                <img
                  src={PoemImage}
                  alt="poem"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </main>


        {/* Right-hand section */}
        
      </div>
      <div className="hidden lg:block w-[25%] p-4 border-l font-roboto">

      </div>
      <section className="hidden fixed right-0 top-0 lg:block w-[25%] p-4 border-l font-roboto">
          <button 
            onClick={handleSubscription}
            className="w-full bg-[#044AB1] py-3 rounded-full text-sm text-white mb-6 mt-5 font-semibold font-roboto hover:bg-[#4570b0fb] transition-colors">
            Get unlimited access
          </button>

          {/* Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 pl-10 border rounded-full text-sm font-roboto focus:outline-none focus:ring-1 focus:ring-[#044AB1] focus:border-[#044AB1]"
            />
            <Search className="absolute left-3 top-3 w-4 h-5 text-#000000" />
          </div>

          <div  className="mb-6">
            <h2 className="flex items-center text-md font-bold font-roboto">
              <span className="bg-[#1A8917] rounded-full w-2 h-2 mr-2"></span>
              What We’re Reading Today
            </h2>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mt-4 mb-2 font-roboto">
                <img src={Author1} alt="author" />{" "}
                <span className="text-sm text-[#292929] font-thin">
                  Amit Das
                </span>
              </div>
              <div>
                <p className="text-md text-[#191919] font-medium">
                  Brown Dust Desert
                </p>
              </div>

              <div className="flex items-center gap-2 mt-4 mb-2 font-roboto">
                <img src={Author1} alt="author" />{" "}
                <span className="text-sm text-[#292929] font-thin">
                  Amit Das
                </span>
              </div>
              <div>
                <p className="text-md text-[#191919] font-medium">
                  Ten Little Birds Flying High in The Sky
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <Link to='/'
              className="text-sm text-[#1A8917] font-semibold hover:underline"
            >
              See the full list
            </Link>
          </div>

          {/* Recommended Categories */}
      <div>
        <h2 className="text-md font-bold mb-4">Recommended Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
        </section>
    </div>
  );
};

export default HomePage;
