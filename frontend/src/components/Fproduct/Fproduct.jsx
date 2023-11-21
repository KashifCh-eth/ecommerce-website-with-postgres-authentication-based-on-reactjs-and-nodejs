import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Fproduct = () => {
  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products?limit=4`);
    console.log(res.data);
    setData(res.data);
    setData(res.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className=" container text-center p-20 ease-in-out m-4 ">
      <h1 className="text-center text-4xl ">Featured Products</h1>
      <div className="flex justify-center flex-wrap items-center p-8">
        {!data ? (
          <>
            <div className="m-4 p-4">
              <h1 className=" f">Loading...</h1>
            </div>
          </>
        ) : (
          data.map((item, index) => {
            return (
              <>
                <div className="backdrop-blur-sm bg-white/30 p-4 m-4" key={index}>
                  <div className="">
                    <img src={item.image} alt="" width="150" className="" />
                  </div>
                  <div>
                    <h1 className="text-center text-black ">
                      {item.title.slice(0, 10)}
                    </h1>
                    <h1 className="text-center text-blue-500">{item.price}</h1>
                    <h1 className="text-center font-bold text-blue-500">
                      Get 10% Off
                    </h1>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
      <NavLink
        to="/products"
        className="p-2  bg-black text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
      >
        See All Products
      </NavLink>
    </div>
  );
};

export default Fproduct;
