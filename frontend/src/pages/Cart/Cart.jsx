import { useSelector, useDispatch } from "react-redux";
import { Remove, Update } from "../../store/redux/cart/CartAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faSquarePlus,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  // const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const INCQuantityHendeler = ({ id, quantity, price }) => {
    console.log(id, quantity, price);
    const newQuantity = quantity + 1;
    const item = { id, quantity: newQuantity, price };
    dispatch(Update(item));
  };

  const DECQuantityHendeler = ({ id, quantity, price }) => {
    console.log(id, quantity, price);
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      const item = { id, quantity: newQuantity, price };
      dispatch(Update(item));
    } else {
      dispatch(Remove(id));
    }
  };

  const total = cart.reduce((a, c) => a + c.price * c.quantity, 0);
  const TotalPrice = total.toFixed(2);

  return (
    <div className="bg-gradient-to-r  from-slate-400  to-slate-200 mt-14 text-cente p-4 min-h-screen">
      <h1 className=" font-bold text-2xl p-20 text-center">Shopping Cart</h1>
      <div className="rounded-2xl backdrop-blur-sm bg-white/30 w-10/12 m-auto">
        <div className="flex  justify-around items-center p-4 ">
          <div className="p-4">
            {cart.length === 0 ? (
              <>
                <h1 className="text-center">0 Product in cart</h1>
              </>
            ) : (
              <>
                {cart.map((item, index) => {
                  return (
                    <>
                      <div
                        className="flex m-4 justify-between  items-center max-sm:flex-col"
                        key={index}
                      >
                        <div className=" overflow-hidden mix-blend-multiply flex justify-center">
                          <img
                            src={item.image}
                            alt=""
                            width="100"
                            className=" object-contain"
                          />
                        </div>
                        <div className=" font-bold p-2 text-center">
                          <h4>
                            Name:{" "}
                            <span className=" text-blue-600">
                              {item.title?.slice(0, 10)}
                            </span>
                          </h4>
                          <h4>
                            Price:
                            <span className=" text-blue-600">{`${item.total.toFixed(
                              2
                            )}$`}</span>
                          </h4>
                          <h4>
                            Quantity:{" "}
                            <span className=" text-blue-600">
                              {item.quantity}
                            </span>
                          </h4>
                          <div className="">
                            <div className="">
                              <FontAwesomeIcon
                                icon={faSquareMinus}
                                className=" cursor-pointer text-2xl"
                                onClick={() =>
                                  DECQuantityHendeler(
                                    (item = {
                                      id: item.id,
                                      quantity: item.quantity,
                                      price: item.price,
                                    })
                                  )
                                }
                              />
                              <input
                                type="number"
                                className="outline-none p-2 m-2  w-10 text-center font-bold"
                                disabled
                                value={item.quantity}
                              />
                              <FontAwesomeIcon
                                icon={faSquarePlus}
                                className=" cursor-pointer text-2xl"
                                onClick={() =>
                                  INCQuantityHendeler(
                                    (item = {
                                      id: item.id,
                                      quantity: item.quantity,
                                      price: item.price,
                                    })
                                  )
                                }
                              />
                            </div>
                          </div>
                          <div>
                            <div className=" text-blue-500  font-bold hover:text-red-500 ">
                              <button
                                type="button"
                                className=" tracking-widest	"
                                onClick={() => dispatch(Remove(item.id))}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
          <div className="text-center  p-4">
            <h1 className=" font-bold text-3xl ">Total Price</h1>
            <h1 className="p-2">{`${TotalPrice}$`}</h1>
            {cart.length > 0 ? (
              <NavLink
                to="/checkout"
                className="p-2 bg-black text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
              >
                Checkout
              </NavLink>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="m-20 text-center">
        {cart.length !== 0 ? (
          <NavLink
            to="/products"
            className="p-2 bg-black text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
          >
            want to add more products ?
          </NavLink>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Cart;
