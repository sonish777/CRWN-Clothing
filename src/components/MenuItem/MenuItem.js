import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
} from "./menu-item.styles";

const menuItem = (props) => {
  console.log(props.history);

  return (
    <MenuItemContainer
      size={props.size}
      onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        imageUrl={props.imageUrl}
      ></BackgroundImageContainer>
      <ContentContainer className="content">
        <h1>{props.title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(menuItem);
