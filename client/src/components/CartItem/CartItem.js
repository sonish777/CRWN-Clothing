import React from "react";

import "./CartItem.scss";

const cartItem = (props) => {
  return (
    <div className="cart-item">
      <img src={props.imageUrl} alt="item"></img>
      <div className="item-details">
        <span className="name">{props.name}</span>
        <span className="price">
          {props.quantity} x {props.price}
        </span>
      </div>
    </div>
  );
};

export default cartItem;
