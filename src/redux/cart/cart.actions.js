import { CartActionTypes } from "./cart.types";

export const toggleCartDropdown = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_DROPDOWN,
  };
};

export const addItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};

export const clearItems = (item) => {
  return {
    type: CartActionTypes.CLEAR_ITEMS,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: item,
  };
};
