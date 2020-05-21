import React from "react";
import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
import PreviewCollection from "../PreviewCollection/PreviewCollection";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./CollectionsOverview.scss";

const collectionsOverview = (props) => {
  return (
    <div className="collections-overview">
      {props.collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: selectCollectionsForPreview(state),
  };
};

export default connect(mapStateToProps)(collectionsOverview);
