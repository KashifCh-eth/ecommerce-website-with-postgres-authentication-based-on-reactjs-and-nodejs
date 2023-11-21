import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Add } from "../../store/redux/cart/CartAction";

function ProductDetails() {
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const item = {
    id: data.id,
    title: data.title,
    price: data.price,
    image: data.image,
    quantity: quantity,
    total: data.price * quantity,
  };

  const cartSelecter = useSelector((state) => state);
  console.log(cartSelecter);

  const fetch = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(res.data);
    setData(res.data);
  };

  const inc = () => {
    setQuantity(quantity + 1);
  };
  const dec = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const AddToCartHandeler = () => {
    if (quantity === 0) {
      alert("Please select quantity");
      return;
    } else {
      if (cartSelecter.cart.find((item) => item.id === data.id)) {
       alert("already added to cart or if you want to add more quantity then go to cart and update quantity");
        return;
      } else {
        dispatch(Add(item));

        alert("added to cart successfully, go to cart to checkout");
        return;
      }
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="w-full mt-12 bg-slate-100 p-4">
      <div className="flex justify-between  m-6 p-8 rounded-2xl">
        <div className="p-4 rounded-2xl backdrop-blur-sm bg-white/30  ">
          <img
            src={data.image}
            alt=""
            width="400px"
            height="200px"
            className="overflow-hidden mix-blend-multiply"
          />
        </div>
        <div className="p-20 w-3/4 justify-center text-center ">
          <h1 className=" font-bold text-xl">{data.title?.slice(0, 20)}</h1>
          <p className="text-lg ">{data.description?.slice(0, 100)}</p>
          <h1 className="text-2xl  ">Category: {data.category}</h1>
          <div className="">
            <h1 className="text-2xl  ">Price: {data.price}</h1>
          </div>
          <div className=" mt-8">
            <div className="">
              <h1 className="text-2xl">Quantity</h1>
              <FontAwesomeIcon
                icon={faSquareMinus}
                className=" cursor-pointer text-2xl"
                onClick={dec}
              />
              <input
                type="number"
                className="outline-none p-2 m-2  w-10 text-center font-bold"
                disabled
                value={quantity}
              />
              <FontAwesomeIcon
                icon={faSquarePlus}
                className=" cursor-pointer text-2xl"
                onClick={inc}
              />
            </div>
          </div>
          <div>
            <button
              className="bg-slate-500 ease-in rounded-2xl p-4 hover:bg-slate-300 hover:text-black mt-8"
              onClick={AddToCartHandeler}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default ProductDetails;
