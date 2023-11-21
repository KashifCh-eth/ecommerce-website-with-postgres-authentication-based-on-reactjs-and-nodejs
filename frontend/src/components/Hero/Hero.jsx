import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../../images/female.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";


function Hero() {
  return (
    <>
      <div className=" relative w-10/12 mt-20 bg-gradient-to-r from-blue-900 to-blue-400 m-auto rounded-3xl flex items-center ">
        <div className=" px-10">
          <div>
            <h1 className="text-5xl text-white  font-bold ">
              Elevate Your Audio Journey
            </h1>
          </div>
          <div>
            <h3 className="text-white mt-5 text-lg">
              Experience Sound in Its Purest Form
            </h3>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-2xl mt-5 text-lg">
              Shop Now
            </button>
            <Link
              to="/"
              className="p-4 font-bold text-white hover:text-blue-300"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex mt-8 basis-1/3">
          <img src={BannerImage} alt="logo" />
        </div>

        {/* <div className="container w-10/12 bg-gradient-to-r from-blue-900 to-blue-400 h-auto m-auto  mt-12 rounded-3xl max-sm:shadow-sm lg:mt-28 ">
          <div className="flex justify-between max-lg:flex-col items-center shadow-sm    pt-8">
            <div className="w-full flex flex-col justify-center p-14 max-lg:items-center max-lg:text-center shadow-sm">
              <div>
                <h1 className="text-5xl text-white  font-bold ">
                  Elevate Your Audio Journey
                </h1>
              </div>
              <div>
                <h3 className="text-white mt-5 text-lg">
                  Experience Sound in Its Purest Form
                </h3>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-2xl mt-5 text-lg"> Shop Now</button>
                <Link to="/" className="p-4 font-bold text-white hover:text-blue-300">Learn More</Link>
              </div>
            </div>
            <div className=" max-md:shadow-md">
              <img src={BannerImage} alt="400"  />
            </div>
          </div>
        </div> */}
           <div className=" absolute bottom-0 right-2/4">
          <FontAwesomeIcon icon={faAngleDown} className="text-3xl text-red-500 animate-bounce cursor-pointer" />
          </div>
      </div>
    </>
  );
}

export default Hero;
