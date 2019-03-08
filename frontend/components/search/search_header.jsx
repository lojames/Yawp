import React from 'react';
import { withRouter } from 'react-router-dom';

const SearchHeader = ( {location, businesses} ) => {
  let headerText = "";
  let showingStr = "";
  let queryStr = "";
  let locationStr = "";
  if (businesses){
    const numBusinesses = Object.keys(businesses).length;
    queryStr= location.search.split("&lat=")[0].split("?query=")[1]
    queryStr = queryStr !== "" ? decodeURIComponent(queryStr) : "";
    if (numBusinesses < 1) {
      headerText = `No results for ${queryStr}`
    } else {
      headerText = queryStr === "" ? "Browsing Businesses" : `Best ${queryStr}`
      showingStr = `Showing 1-${numBusinesses} of ${numBusinesses}`
    }

    locationStr = location.search.split("&filters=")[0].split("&loc=")[1]
    locationStr = locationStr !== "" ? decodeURIComponent(locationStr) : ""
  }

  return (
    <div className='results-header'>
      <div className='results-header-container'>
        <div className='results-header-textbox'>
          <div className='results-header-text'>
            <h1><b>{headerText}</b> in {locationStr}</h1>
          </div>
          <div className='results-showing-text'>
            {showingStr}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
