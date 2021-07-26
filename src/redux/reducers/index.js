/*jshint esversion: 6 */
import { combineReducers } from "redux";

import products from "./products";
import cart from "./cart";

const rootReducers = combineReducers({
  products,
  cart,
});

export type AppState = ReturnType<typeof reducers>; //через це не виникає проблем з useSelector(({cart}) в headerCart

export default rootReducers;
