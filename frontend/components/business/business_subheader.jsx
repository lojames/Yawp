import React from 'react';
import { Link } from 'react-router-dom';
import BusinessMap from './business_map';
import BusinessImages from './business_images';


const BusinessSubheader = ({ business, images }) => {
  return (
    <div className="business-subheader-container">
      <BusinessMap business={business}/>
      <BusinessImages business={business} images={images}/>
    </div>
  );
}

export default BusinessSubheader;
