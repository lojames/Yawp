import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';

const search_svg = () => {
  return (
    <svg id="24x24_search" height="100%" viewBox="0 0 24 24" width="100%">
      <path d="M20.753 19.34l-4.295-4.297A7.46 7.46 0 0 0 18 10.5a7.5 7.5 0 1
        0-7.5 7.5 7.46 7.46 0 0 0 4.543-1.542l4.296 4.295a1 1 0 1 0
        1.412-1.414zM10.5 16A5.506 5.506 0 0 1 5 10.5C5 7.467 7.467 5 10.5
        5S16 7.467 16 10.5 13.533 16 10.5 16z">
      </path>
    </svg>
  );
}

const SearchForm = () => {
  const userLocation = (window.userData.city) ? `${window.userData.city}, ${window.userData.region_name}` : "";
  const highlightText = () => {
    const inputField = document.getElementById('search-bar-input-id')
    inputField.setSelectionRange(0, inputField.value.length);
  }
  
  return (
    <form className="search-bar">
      <div className="search-find-bar">
        <label className="search-find-label">
          <span className="field-name">Find</span>
          <input
            className="search-bar-input"
            type="text"
            placeholder="burgers, barbers, spas, handymen..."
          />
        </label>
      </div>

      <div className="search-near-bar">
        <label className="search-near-label">
          <span className="field-name">Near</span>
            <AlgoliaPlaces
            placeholder='address, neighborhood, city, state or zip'
            defaultValue={userLocation}
            onFocus = { highlightText }
            id='search-bar-input-id'
            options={{
              appId: window.algAppId,
              apiKey: window.algApiKey,
              language: 'en',
              countries: ['us'],
              type: '',
            }}
            onChange={({ query, rawAnswer, suggestion, suggestionIndex }) =>
              console.log(suggestion.latlng)
            }
          />
        </label>
      </div>

      <span className="search-submit-container">
        <button className="search-submit" type="submit" value="submit" >
          <svg className="search-icon" height="100%" viewBox="0 0 24 24" width="100%">
            <path d="M20.753 19.34l-4.295-4.297A7.46 7.46 0 0 0 18 10.5a7.5 7.5 0 1
              0-7.5 7.5 7.46 7.46 0 0 0 4.543-1.542l4.296 4.295a1 1 0 1 0
              1.412-1.414zM10.5 16A5.506 5.506 0 0 1 5 10.5C5 7.467 7.467 5 10.5
              5S16 7.467 16 10.5 13.533 16 10.5 16z">
            </path>
          </svg>
        </button>
      </span>

    </form>
  );
};

export default SearchForm;
