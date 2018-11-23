import React from 'react';
import { Link } from 'react-router-dom';


const BusinessHeader = ({ business }) => {
  return (
    <div className="main-business-wrap">
      <div className="main-business-container">
        <div className="main-business-header">
          <div className="main-business-info">
            <h1>{business.name}</h1>
            {business.score}
            <span className="review-count">{business.num_reviews} reviews</span>
            <span className="price-category">{business.price}</span>
          </div>
          <div className="main-business-header-links">
            <Link to="/">Write a Review</Link>
            <ul>
              <li><Link to="#">Add Photo</Link></li>
              <li><Link to="#">Share</Link></li>
              <li><Link to="#">Save</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHeader;
