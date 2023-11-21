import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../images/logo.svg";
import authContext from "../../store/store";
// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase/firebase-config";
import { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

function index() {
  const [toggle, setToggle] = useState(false);
  const authCtx = useContext(authContext);
  console.log("authCtx", authCtx);

  const cartLenght = useSelector((state) => state.cart.length);
  console.log(cartLenght);

  const signOutHandler = () => {
    console.log("signout");
    localStorage.removeItem("token");
    authCtx.setToken(null);
    alert("Sign-out successful.");
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const getToken = () => {
    const token = localStorage.getItem("token");
    authCtx.setToken(token);
    console.log("token", token);
  };

  useEffect(() => {
    getToken();
  }, []);
  return (
    <>
      <div className=" ">
        <div className=" container m-auto flex fixed top-0 right-0 left-0 p-2 max-lg:flex justify-between items-center backdrop-blur-sm bg-white/30 z-10  shadow-sm ">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className=" max-lg:hidden">
            <NavLink to="/" className="text-black  p-3 m-2 font-bold">
              Home
            </NavLink>
            <NavLink to="/products" className="text-black  p-3 m-2 font-bold">
              Products
            </NavLink>
            <NavLink to="/about" className="text-black   p-3 m-2 font-bold">
              About
            </NavLink>
            <NavLink to="/contact" className="text-black   p-3 m-2 font-bold">
              Contact
            </NavLink>
          </div>
          <div className="text-black max-lg:hidden">
            <NavLink to="/cart" className="p-2 m-2 ">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="p-1 rounded-full">{cartLenght}</span>
            </NavLink>

            {authCtx.token ? (
              <button
                onClick={signOutHandler}
                className="p-1 m-1 bg-black text-white"
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="p-2 m-2 bg-black text-white">
                Login
              </NavLink>
            )}
          </div>
          {toggle ? (
            <>
              <div className=" bg-white flex flex-col lg:hidden ">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-black cursor-pointer lg:hidden"
                  onClick={toggleHandler}
                />
                <NavLink to="/" className="text-black  p-3 m-2 font-bold">
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  className="text-black  p-3 m-2 font-bold"
                >
                  Products
                </NavLink>
                <NavLink to="/about" className="text-black   p-3 m-2 font-bold">
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-black   p-3 m-2 font-bold"
                >
                  Contact
                </NavLink>
                <NavLink to="/cart" className="p-2 m-2 ">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="p-1 rounded-full">{cartLenght}</span>
                </NavLink>
                {authCtx.token ? (
                  <button
                    onClick={signOutHandler}
                    className="p-2 m-2 bg-black text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    className="p-2 m-2 bg-black text-white text-center"
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </>
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="text-black cursor-pointer lg:hidden"
              onClick={toggleHandler}
            />
          )}
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default index;
