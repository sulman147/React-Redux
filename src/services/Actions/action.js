import { ADD_TO_CART } from "../constants";
// import { REMOVE_TO_CART } from "../constants";
export const addToCart = (data) => {
  console.log("action", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
// const removeToCart = (data) => {
//   return {
//     type: REMOVE_TO_CART,
//     data: data,
//   };
// };
