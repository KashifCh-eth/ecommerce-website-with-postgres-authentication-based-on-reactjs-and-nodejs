import React from "react";
import logo from "../../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTelegram,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-400 via-gray-100 to-blue-800 mt-20  rounded-t-2xl">
        <div className=" container m-auto flex justify-between text-white items-center">
          <div className="p-4 basis-80">
            <img src={logo} alt=""  className="duration-300 ease-in-out cursor-pointer"/>
            <p className=" text-black mt-2">
              By subscribing you agree to with our <span className=" font-semibold text-blue-800">
              Privacy Policy
                </span> and provide
              consent to receive updates from our company.
            </p>
            <div className="p-4">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-2xl animate-bounce  text-blue-500 hover:text-blue-700 cursor-pointer hover:rotate-12 "
              />
              <FontAwesomeIcon
                icon={faTelegram}
                className="text-2xl m-2 animate-bounce  text-blue-400 hover:text-blue-600 cursor-pointer hover:rotate-12 "
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-2xl  text-black hover:text-gray-950 cursor-pointer animate-bounce  hover:rotate-12 "
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-2xl m-2 text-red-400 hover:text-red-700 cursor-pointer animate-bounce hover:rotate-12  "
              />
            </div>
          </div>
          <div className="flex-col p-2 ">
            <h1 className=" font-extralight text-white p-2">Join Our List Today!</h1>
            <input
              className="border-2 border-gray-400 rounded-lg p-1 m-1 outline-none   text-black font-semibold"
              placeholder="Enter Email!"
            />
            <button className="bg-blue-500 rounded-lg text-white p-2 m-1 hover:bg-red-500 delay-150 hover:rotate-12">
              Subscribe 
            </button>
            <div>
                <p className="text-black font-normal mt-4">Power By @KnowledgeStrems</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
