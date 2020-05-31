import React, { Component } from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  ImageContainer,
  FooterContainer,
  NameContainer,
  PriceContainer,
  AddButton,
} from "./collection-item.styles";

class CollectionItem extends Component {
  state = {
    isHidden: true,
  };

  render() {
    const { name, price, imageUrl } = this.props.item;

    return (
      <CollectionItemContainer>
        <ImageContainer className="image" imageUrl={imageUrl}></ImageContainer>
        <FooterContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </FooterContainer>
        <AddButton onClick={() => this.props.addItem(this.props.item)} inverted>
          Add to cart
        </AddButton>
      </CollectionItemContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
