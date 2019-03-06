import React from 'react';
import { Link } from 'react-router-dom';
import { starsStr, imageOffset } from '../../util/stars'

const SearchBusiness = ({ business, reviews, images, location, id, idx }) => {
  console.log("INVIDUAL BUSINESS");
  console.log(business);
  console.log(reviews);
  console.log(images);
  console.log("\n\n\n\n\n\n\n\n\n\n\n");
  const review = reviews[business.review_ids[0]] ? reviews[business.review_ids[0]].body : "";
  const image = images[business.image_ids[0]] ? images[business.image_ids[0]].image_url : "defaultImage";
  console.log(location.search);
  return (
    <li>
      {image}
      {idx}
      <Link to={{
          pathname: `/biz/${id}`,
          search: location.search
      }}>{business.name}</Link>
      <div className="review-stars-18"
        title={starsStr(business.score)}
        style={{background: `url(stars.png) 0 -${imageOffset(business.score, 18)}px`}}>
      </div>
      <div>
        {business.num_reviews} reviews
      </div>
      {business.phone}
      {business.street_address}
      {review}
    </li>
  );
}

export default SearchBusiness;
