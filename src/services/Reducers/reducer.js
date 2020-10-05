import { ADD_TO_CART } from "../constants";

const initialState = {
  cardData: [],
};
console.log("Initital State", initialState);
export default function cartItems(state = [], action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Reducer", action);
      return [...state, { cartData: action.data }];
    default:
      return state;
  }
}
