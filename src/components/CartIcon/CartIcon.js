import React from "react";
import { createStructuredSelector } from "reselect";

import "./CartIcon.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { connect } from "react-redux";

const cartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{props.itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartDropdown: () => dispatch(toggleCartDropdown()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
