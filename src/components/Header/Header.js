import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./Header.scss";

const header = (props) => {
  return (
    <div className="header">
      <NavLink to="/" className="logo-container">
        <Logo className="logo" />
      </NavLink>
      <div className="options">
        <NavLink to="/shop" className="option" activeClassName="active-nav">
          SHOP
        </NavLink>
        <NavLink to="/contact" className="option" activeClassName="active-nav">
          CONTACT
        </NavLink>
        {props.currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <NavLink className="option" to="/signin" activeClassName="active-nav">
            SIGN IN
          </NavLink>
        )}
        <CartIcon />
      </div>
      {props.showCartDropdown ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showCartDropdown: selectCartHidden,
});

export default connect(mapStateToProps)(header);
