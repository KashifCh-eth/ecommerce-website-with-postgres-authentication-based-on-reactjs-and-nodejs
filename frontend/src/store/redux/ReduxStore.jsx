import { createStore } from "redux";

import { CartReducer } from "./cart/CartReducer";

export const ReduxStore = createStore(CartReducer);
