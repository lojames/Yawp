import React from 'react';
import { Link } from 'react-router-dom';
import { starsStr, imageOffset } from '../../util/stars'
import { unescaper } from "../../util/data"
import ReactHtmlParser from 'react-html-parser';

const SearchBusiness = ({ business, reviews, images, location, id, idx }) => {
  let review = ""
  let readMoreFlag = "hidden";
  if(reviews[business.review_ids[0]]){
    review = reviews[business.review_ids[0]].body;
    if (review.length > 150){
      review = review.slice(0, 150);
      while (review.slice(review.length-1, review.length) !== " " &&
            review.slice(review.length-1, review.length) !== "r" &&
            review.slice(review.length-1, review.length) !== "b" &&
            review.slice(review.length-1, review.length) !== "<" &&
            review.slice(review.length-1, review.length) !== ">" &&
            review.length > 0){
        review = review.slice(0, review.length-1);
      }
      review = review.slice(0, review.length-1) + '...\" ';
      readMoreFlag = "visibile";
    }
    review = ReactHtmlParser(review);
  } else {
    review = "";
  }

  // let review = reviews[business.review_ids[0]] ? ReactHtmlParser(reviews[business.review_ids[0]].body).toString() : "";
  let streetAddress = business.street_address ? business.street_address.replace("\\n", "<br>") : "";
  const image = images[business.image_ids[0]] ? images[business.image_ids[0]].image_url : "/business_large_square.png";
  // if (review.length > 150){
  //   review = review.slice(0, 150);
  //   while (review.slice(review.length-1, review.length) !== " " && review.length > 0){
  //     review = review.slice(0, review.length-1);
  //   }
  //   review = review.slice(0, review.length-1) + '...\" ';
  //   readMoreFlag = "visibile";
  // }

  return (
    <li>
      <section className="search-list-business-image-wrapper">
        <img src={`https://yawp-app.s3.amazonaws.com/bphoto/${image}/s.jpg`}/>
      </section>

      <section className="search-list-business-info-wrapper">
        <div className="search-list-business-info">
          <div className="search-list-business-info-left">
            <h1>
              {idx}.&nbsp;
              <Link to={{
                  pathname: `/biz/${id}`,
                  search: location.search
                }}>{unescaper(business.name)}
              </Link>
            </h1>
            <div className="search-list-business-text">
              <div className="review-stars-18"
                title={starsStr(business.score)}
                style={{background: `url(stars.png) 0 -${imageOffset(business.score, 18)}px`}}>
              </div>
              {business.num_reviews} reviews
            </div>
          </div>
          <div className="search-list-business-info-right">
            <div className="search-list-business-text">
              {business.phone}
            </div>
            <div className="search-list-business-text">
              {ReactHtmlParser(streetAddress)}
            </div>
            <div className="search-list-business-text">
              {business.neighborhood}
            </div>
          </div>
        </div>
      <div className="search-list-business-review">
        <p>
          {review}
          <Link
            to={{
              pathname: `/biz/${id}`,
              search: location.search
            }}
            style={{visibility: readMoreFlag}}>read more
          </Link>
        </p>
      </div>
      </section>
    </li>
  );
}

export default SearchBusiness;
