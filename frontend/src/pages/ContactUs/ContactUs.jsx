import React from "react";
import { NavLink } from "react-router-dom";

function ContactUs() {
  return (
    <div className="mt-20 w-60 m-auto items-center text-center ">
      <h1 className="text-4xl text-center">Contact Us</h1>
      <p className="p-4">Email: abs@gmail.com</p>
      <p className="p-4">Phone: +92 123 456 789</p>

      <NavLink to="/" className="p-1 border">
        Go Back
      </NavLink>
    </div>
  );
}

export default ContactUs;
