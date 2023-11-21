import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function BuySteps() {
  return (
    <>
      <div className=" w-10/12 container m-auto  text-white pb-6 bg-gradient-to-r from-blue-900 to-blue-400  rounded-3xl  ">
        <div className="p-4 pt-12 text-center ">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-2xl m-2 text-black"
          />
          <h1 className="text-2xl   font-medium">Buy Steps</h1>
        </div>
        <p className=" p-3 text-center text-2xl font-medium">
          Follow these steps to buy our products
        </p>
        <div className=" flex justify-between text-center m-20">
          <div className="w-60">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-2xl m-2 text-black animate-bounce cursor-pointer"
            />
            <h1 className="text-2xl  font-medium">Choose product</h1>
            <p className="  text-black  font-medium p-3">
              Choose your product and click on the buy now button
            </p>
          </div>
          <div className="w-60">
            <FontAwesomeIcon
              icon={faUser}
              className="text-2xl m-2 text-black animate-bounce cursor-pointer"
            />
            <h1 className="text-2xl  font-medium">Enter details</h1>
            <p className="   text-black  font-medium p-3">
              Enter your details and click on the buy now button
            </p>
          </div>
          <div className="w-60">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-2xl m-2 text-black animate-bounce cursor-pointer "
            />
            <h1 className="text-2xl   font-medium">Make a payment</h1>
            <p className="   text-black   font-medium p-3">
              Choose your payment method and click on the buy now button
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuySteps;
