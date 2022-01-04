import React from "react";
import { withRouter } from "../../util/withRouter";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl, navigate, location }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => navigate(`${location.pathname}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
