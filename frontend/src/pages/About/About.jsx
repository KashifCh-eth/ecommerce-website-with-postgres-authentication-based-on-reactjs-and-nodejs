import React from "react";
import { NavLink } from "react-router-dom";
function About() {
  return (
    <div className="mt-24 container m-auto">
      <h1 className="text-4xl text-center font-bold">About Us</h1>
      <p className="text-center text-xl mt-4 w-6/12  m-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quam
        veritatis, accusantium rerum maxime dolorem blanditiis at animi alias
        aliquid odit tempore aut? Recusandae, vitae. Incidunt molestiae quia
        provident cum.
      </p>
      <div className="flex justify-center mt-4 flex-col w-60 m-auto">
      <input className="border-2 border-gray-400 rounded-lg p-1 m-1 outline-none   text-black font-semibold" placeholder="Enter Email!"/>
      <input className="border-2 border-gray-400 rounded-lg p-1 m-1 outline-none   text-black font-semibold" placeholder="Enter Name!"/>
       <textarea className="border-2 border-gray-400 rounded-lg p-1 m-1 outline-none   text-black font-semibold" placeholder="Enter Message!"/>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 m-1 rounded">
          Send Message Now!
        </button>
        </div>
        <NavLink to="/" className="p-1 border text-center">
        Go Back
      </NavLink>
    </div>
  );
}

export default About;
