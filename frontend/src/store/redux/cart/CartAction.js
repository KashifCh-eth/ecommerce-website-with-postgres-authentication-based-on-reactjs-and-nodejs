import { Add_to_cart, Remove_from_cart, Update_cart } from "./CartActionType";

const Add = (item) => {
  return {
    type: Add_to_cart,
    payload: item, 
  };
};

const Remove = (item) => {
  return {
    type: Remove_from_cart,
    payload: item,
  };
};

const Update = (item) => {
  return {
    type: Update_cart,
    payload: item,
  };
};

export { Add, Remove, Update };
