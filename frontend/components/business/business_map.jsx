import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from "../../util/icons"

const BusinessMap = ({ business }) => {
  let phoneDisplay, websiteDisplay;
  business.phone === null ? phoneDisplay = 'none' : phoneDisplay = 'block';
  if (business.website === null) {
    websiteDisplay = 'none';
  } else {
    websiteDisplay = 'block';
  }

  return (
    <section className="map-container">
      <img alt="Map"
        height="135"
        width="286"
        src={`https://maps.googleapis.com/maps/api/staticmap?scale=2
          &center=${business.latitude},${business.longitude}
          &language=None
          &zoom=15
          &markers=scale:2
          |${business.latitude},${business.longitude}
          &sensor=false
          &size=286x135
          &key=${window.goApiKey}`}/>
      <ul>
        <li className="address">
          <div>{Icons.addressIcon(18,"#666")}</div>
          <strong>
          <div className="map-text">{business.street_address}</div>
          <br/>
          <div className="map-text">
            <span>{business.city}, </span>
            <span>{business.state} </span>
            <span>{business.zip}</span>
          </div>
          </strong>
        </li>

        <li className="phone" style={{display: phoneDisplay}}>
          <div>{Icons.phoneIcon(18,"#666")}</div>
          <div className="map-text">{business.phone}</div>
        </li>

        <li className="website" style={{display: websiteDisplay}}>
        <div>{Icons.websiteIcon(18,"#666")}</div>
          <div className="map-text"><a href={`http://${business.website}`}
            className="link">{business.website}</a></div>
        </li>
      </ul>
    </section>
  );
}

export default BusinessMap;
