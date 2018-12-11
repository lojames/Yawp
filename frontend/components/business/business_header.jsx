import React from 'react';
import { Link } from 'react-router-dom';
import { starsStr, imageOffset } from '../../util/stars'
import * as Icons from "../../util/icons"


const BusinessHeader = ({ business }) => {
  return (
    <div className="main-business-wrap">
      <div className="main-business-container">
        <div className="main-business-header">
          <div className="main-business-info">
            <h1>{business.name}</h1>
            <div className="rating-wrapper">
              <div className="main-business-stars"
                title={starsStr(business.score)}
                style={{background: `url(stars.png) 0 -${imageOffset(business.score)}px`}}>
              </div>
              <div className="review-count">{business.num_reviews} reviews</div>
            </div>
            <span className="price-category">{business.price}&middot;</span>
          </div>
          <div className="main-business-header-links">
            <a href="/" className="main-business-review-link">
              {Icons.starIcon(24, "white")}
              <span className='review-text'>Write a Review</span>
            </a>
            <ul>
              <a href="/">
                <li>
                  {Icons.addPhotoIcon(18, "rgb(102,102,104)")}
                  <span className='add-photo-icon-text'>Add Photo</span>
                </li>
              </a>
              <a href="/">
                <li>
                  {Icons.shareIcon(18, "rgb(102,102,104)")}
                  <span className='share-icon-text'>Share</span>
                </li>
              </a>
              <a href="/">
                <li className="main-business-header-save">
                  {Icons.saveIcon(14, "rgb(102,102,104)")}
                  <span className='save-icon-text'>Save</span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHeader;
