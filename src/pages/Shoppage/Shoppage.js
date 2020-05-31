import React, { Component } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../Collection/Collection";

import { fetchCollectionStartAsync } from "../../redux/shop/shop.action";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import withSpinner from "../../components/with-spinner/with-spinner.component";

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionStartAsync();
  }

  render() {
    return (
      <div className="shop-page">
        <Route
          exact
          path={this.props.match.path}
          component={withSpinner(
            CollectionsOverview,
            this.props.isCollectionFetching
          )}
        />
        <Route
          path={`${this.props.match.path}/:collectionId`}
          component={withSpinner(
            CollectionPage,
            !this.props.isCollectionLoaded
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
