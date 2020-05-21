import React from "react";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../Collection/Collection";

const shopPage = (props) => {
  return (
    <div className="shop-page">
      <Route exact path={props.match.path} component={CollectionsOverview} />
      <Route
        path={`${props.match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default shopPage;
