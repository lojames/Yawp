import React from 'react';
import SearchBusiness from './search_business';

const searchBusinesses = (props) => {

  console.log("SEARCH BUSINESS CONTAINER BACK CHECK");
  console.log(Object.keys(props.businesses));
  return(
    Object.keys(props.businesses).map ( (id, idx) => (
      <SearchBusiness
        business={props.businesses[id]}
        key={id}
        id={id}
        idx={idx+1}
        reviews={props.reviews}
        images={props.images}
        location={props.location}
        />
    ))
  )
}

const SearchBusinessesContainer = (props) => {
  return (
    <ul className="search-businesses-list">
      {searchBusinesses(props)}
    </ul>
  );
}

export default SearchBusinessesContainer;
