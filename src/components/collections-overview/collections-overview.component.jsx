import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionsPreview key={id} {...otherCollectionProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
