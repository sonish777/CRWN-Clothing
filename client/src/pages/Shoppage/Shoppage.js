import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.action";
import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverviewContainer";
import CollectionContainer from "../Collection/CollectionContainer";

const ShopPage = ({ match, fetchCollectionStartAsync }) => {
  useEffect(() => {
    fetchCollectionStartAsync();
  }, [fetchCollectionStartAsync]);

  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionsOverviewContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
