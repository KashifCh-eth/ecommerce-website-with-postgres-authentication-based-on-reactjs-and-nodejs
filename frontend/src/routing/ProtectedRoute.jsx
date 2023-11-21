import authContext from "../store/store";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function ProtectedRoute({ children }) {
  const authCtx = useContext(authContext);
  const isLoggedin = authCtx.token;
   return (
    <>
      {isLoggedin ? (
        children
      ) : (
        <div className="flex justify-center items-center h-screen flex-col">
          <h1 className="text-5xl text-red-500">Please Login  or Sign In First!</h1>
          <div>
            <button className="bg-slate-500 ease-in p-4 mt-20 m-2 hover:bg-slate-300 hover:text-black ">
              <NavLink to="/login">Login</NavLink>
            </button>
            <button className="bg-slate-500 ease-in p-4 mt-20 m-2 hover:bg-slate-300 hover:text-black ">
              <NavLink to="/signup">Sign In</NavLink>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProtectedRoute;
