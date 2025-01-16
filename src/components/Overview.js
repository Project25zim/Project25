import React from 'react';
import '../css/overviewcomponent.css';

function OverviewComponent() {
  return (
    <div className="overview-container">
      <div className="overview-content">
        <div className="overview-text">
          <h2 className="overview-title">Overview</h2>
          <p>
            Every person deserves access to quality education. School prepares us for the world and allows us to discover talents and skills worth pursuing. Let’s open the doors for more learners to enjoy the same opportunity of going to class.
          </p>
          <p>
            With your donation, we can create a learning environment where students can thrive and believe in a brighter future ahead.
          </p>
        </div>
        <div className="overview-images">
          <img
            src="left-image-url.jpg"
            alt="Shoes and legs"
            className="overview-image overview-image-left"
          />
          <img
            src="right-image-url.jpg"
            alt="Happy children"
            className="overview-image overview-image-right"
          />
        </div>
      </div>
    </div>
  );
}

export default OverviewComponent;
