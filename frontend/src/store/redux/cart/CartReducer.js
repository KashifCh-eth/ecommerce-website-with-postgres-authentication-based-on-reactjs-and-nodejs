import { Add_to_cart, Remove_from_cart, Update_cart } from "./CartActionType";

const initalCartStage = {
  cart: [],
};

const CartReducer = (state = initalCartStage, action) => {
  switch (action.type) {
    case Add_to_cart:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case Update_cart:
      const { id, quantity, price } = action.payload;
      console.log(`id`, id , `quantity`, quantity , `price`, price);
      const newcart = state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: quantity , total : quantity * price};
        }
        return item;
      });
      console.log(`newcart`, newcart);
      return {
        ...state,
        cart: newcart,
      };
    case Remove_from_cart:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export { CartReducer };
