import React from 'react';
import { Link } from 'react-router-dom';

const BusinessUserReview = ({business}) => {
  const hoverStars = rating => () => {
    const image = document.getElementById("hoverable-stars");
    if (image !== null) image.style.backgroundPosition=`0 ${rating*30*-1}px`;
  }

  const noStars = () => {
    const image = document.getElementById("hoverable-stars");
    if (image !== null) image.style.backgroundPosition=`0 0`;
  }

  return (
    <li>
      <div className="profile-pic-wrapper">
        <img className="profile-pic" src="/empty_profile.png" />
      </div>
      <div className="business-write-reivew-stars-container-wrapper">
        <div className="business-write-reivew-stars-container">
          <div className="business-write-review-stars-upper">
            <div className="hoverable-stars-container">
              <div className="hoverable-stars" id="hoverable-stars">
                <div
                  onMouseEnter={hoverStars(1)}
                  onMouseLeave={noStars}>
                </div>
                <div
                  onMouseEnter={hoverStars(2)}
                  onMouseLeave={noStars}>
                </div>
                <div
                  onMouseEnter={hoverStars(3)}
                  onMouseLeave={noStars}>
                </div>
                <div
                  onMouseEnter={hoverStars(4)}
                  onMouseLeave={noStars}>
                </div>
                <div
                  onMouseEnter={hoverStars(5)}
                  onMouseLeave={noStars}>
                </div>
              </div>
            </div>
          </div>
          <Link to="/">Start your review of <b>{business.name}</b>.</Link>
        </div>
      </div>
    </li>
  );
}

export default BusinessUserReview;
