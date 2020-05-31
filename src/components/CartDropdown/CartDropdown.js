import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import {
  CartItemsContainer,
  CartDropdownContainer,
  EmptyMessageContainer,
} from "./cart-dropdown.styles";

const cartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <Button
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartDropdown());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(cartDropdown));
