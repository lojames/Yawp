import React from 'react';
import { Link } from 'react-router-dom';
import { starsStr, imageOffset } from '../../util/stars'

const htmlDecode = function(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

const BusinessReview = ({ review }) => {
  return (
    <li>
      <div className="review-profile-pic-wrapper">
        <img src="/user_square.png" className="review-user-profile"/>
        <Link to="/">{review.first_name} {review.last_name}</Link>
      </div>

      <div className="review-wrapper">
        <div className="review-header">
          <div className="review-stars-18"
            title={starsStr(review.score)}
            style={{background: `url(stars.png) 0 -${imageOffset(review.score, 18)}px`}}>
          </div>
          <div> {review.date} </div>
        </div>
          <p dangerouslySetInnerHTML={{ __html: review.body }} />
      </div>

    </li>
  );
}

export default BusinessReview;
