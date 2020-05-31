import React from "react";

import "./Homepage.scss";
import Directory from "../../components/Directory/Directory";
import HomepageContainer from "./homepage.style";

const homePage = (props) => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};

export default homePage;
