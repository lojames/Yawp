import React from 'react';
import { Link } from 'react-router-dom';
import { starsStr, imageOffset } from '../../util/stars'

const SearchBusiness = ({ business, reviews, images, id, idx }) => {
  return (
    <li>
      {idx} <Link to={`/biz/${id}`}>{business.name}</Link>
      <div className="review-stars-18"
        title={starsStr(business.score)}
        style={{background: `url(stars.png) 0 -${imageOffset(business.score, 18)}px`}}>
      </div>
      <div>
        {business.num_reviews} reviews
      </div>
      {business.phone}
      {business.street_address}
    </li>
  );
}

export default SearchBusiness;
