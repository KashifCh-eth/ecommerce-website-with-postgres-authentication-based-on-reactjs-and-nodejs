import axios from "axios";
import React, { useEffect, useState } from "react";
// import ProductCart from './../../components/ProductCart';
import ProductCart from "../../components/ProductCart";
import shopBanner from "../../images/shopBanner.jpg";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [FilterArray, setFilterArray] = useState([]);
  const [LoadMore, setLoadMore] = useState(false);
  const [search, setSearch] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  async function fatch() {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProduct(data.data.sort(compareName));
      setFilterArray(data.data.sort(compareName));
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fatch();
  }, []);
  useEffect(() => {
    let filteredArr = product;
    if (search !== "") {
      filteredArr = product.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
    }
    if (min !== "") {
      filteredArr = filteredArr.filter((item) => {
        return item.price >= min;
      });
    }
    if (max !== "") {
      filteredArr = filteredArr.filter((item) => {
        return item.price <= max;
      });
    }
    setFilterArray(filteredArr);
  }, [search, min, max]);
  function compareName(a, b) {
    const name1 = a.title.toUpperCase();
    const name2 = b.title.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
      comparison = 1;
    } else if (name1 < name2) {
      comparison = -1;
    }
    return comparison;
  }

  return (
    <>
      <Outlet />
      <div className=" bg-slate-300 h-full flex flex-col justify-center  items-center  mt-12 min-h-screen ">
        <div className="flex items-center justify-center ">
          {/* <img src={shopBanner} alt="" className="rounded-3xl p-4"/> */}
        </div>
        <div className="h-20 flex items-center text-3xl justify-center flex-col ">
          <h1 className="">Products</h1>
        </div>
        <div className="flex flex-col">
          <input
            type="search"
            className=" outline-none w-80 p-2 m-2"
            placeholder="Serach Products"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div>
            <input
              type="number"
              placeholder="MIN"
              className=" outline-none  w-36 p-2 m-2"
              onChange={(e) => setMin(e.target.value)}
              value={min}
            />
            <input
              type="number"
              placeholder="MAX"
              className=" outline-none w-40 p-2 m-2"
              onChange={(e) => setMax(e.target.value)}
              value={max}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-4  ">
          {FilterArray.length === 0 ? (
            <>
              <div className="m-4 p-4">
                <h1 className="text-black">Loading...</h1>
                 
              </div>
            </>
          ) : (
            FilterArray.map((item, index) => {
              return (
                <>
                  <ProductCart
                    key={index}
                    id={item.id}
                    name={item.title}
                    price={item.price}
                    image={item.image}
                  />
                </>
              );
            })
          )}
        </div>
        {/* <button
          className="bg-slate-500  text-white py-2 px-5 rounded-3xl m-5 w-40 backdrop-blur-xl  hover:bg-slate-300  transition ease-in-out delay-150"
          onClick={() => setLoadMore(!LoadMore)}
        >
          {LoadMore ? "Show Less" : "Load More"}
        </button> */}
      </div>
    </>
  );
};

export default Products;
