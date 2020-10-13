import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const directory = (props) => {
  return (
    <div className="directory-menu">
      {props.sections.map(({ id, ...menuItemsProps }) => (
        <MenuItem key={id} {...menuItemsProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(directory);
