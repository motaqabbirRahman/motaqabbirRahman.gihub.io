// Details.jsx
import React from "react";

const Details = ({ id, logo, title, description }) => {
  return (
    <div className="details-page-container">
      {/* <div className="details-logo-container">
        <img src={logo} alt={title} className="details-logo" />
      </div> */}
      <div className="details-main">
        <div className="details-left-side">
          <div className="details-image-container">
            <div className="details-image-wrapper">
              <img src={logo} alt={title} />
            </div>
          </div>
        </div>
        <div className="details-right-side">
          <h2 className="details-title">{title}</h2>
          <p className="details-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
