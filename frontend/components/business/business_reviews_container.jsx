import React from 'react';
import BusinessUserReview from './business_user_review';
import BusinessHour from './business_hour';
import Review from './business_review';

const businessReviews = (reviews, business) => {
  if (reviews === undefined) {
    return (
      <>
      </>
    );
  }

  return(
    business.review_ids.map( id => (
      <Review
        review={reviews[id]}
        key={id}
        />
    ))
  )
}

const BusinessReviewsContainer = ({ business, reviews }) => {
  return (
    <>
      <div className="business-review-header">
        <h2>Recommended Reviews <span>for {business.name}</span></h2>
      </div>
      <ul className="business-reviews">
        <BusinessUserReview business={business}/>
        {businessReviews(reviews, business)}
      </ul>
    </>
  );
}

export default BusinessReviewsContainer;
