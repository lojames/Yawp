import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import { withRouter } from 'react-router-dom';
import { parseSearchString, isValidSearchString, getUserLocation, convertToHistoryOptions, getSearchFromURL } from '../../util/search_util'
import { setCookie } from '../../util/cookies';

class SearchForm extends React.Component{

  constructor(props){
    super(props);

    const searchParams = parseSearchString(this.props.location.search);
    const nearDefaultText = searchParams.query ? searchParams.query :  "";
    const userLocationObj = searchParams.loc ? searchParams : getUserLocation();
    this.state = {
      query: nearDefaultText,
      lat: userLocationObj.lat,
      lon: userLocationObj.lon,
      loc: userLocationObj.loc,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFindChange = this.handleFindChange.bind(this);
    this.handleNearChange = this.handleNearChange.bind(this);
  }

  componentDidUpdate(prevProps){
    const searchParams = parseSearchString(this.props.location.search);
    const prevPropsSearchParams = parseSearchString(prevProps.location.search);
    if (this.props.location.pathname !== '/' && JSON.stringify(searchParams) !== JSON.stringify(prevPropsSearchParams)){
      const historyOptions = convertToHistoryOptions(searchParams);
      this.props.history.replace(historyOptions);
      this.setState({
        query: searchParams.query,
        lat: searchParams.lat,
        lon: searchParams.lon,
        loc: searchParams.loc,
      })
    }
    document.getElementById("search-bar-input-1").value = this.state.loc;
  }

  handleSubmit(e) {
    e.preventDefault();
    const historyOptions = convertToHistoryOptions(this.state);

    if (this.props.location.pathname === '/search'){
      this.props.history.replace(historyOptions);
    } else {
      this.props.history.push(historyOptions);
    }
  }


  handleFindChange(e){
    this.setState({
      query: e.target.value
    });
  }

  handleNearChange(suggestion){
    let city, state;
    (suggestion.city) ? city = suggestion.city : city = suggestion.name;
    (suggestion.administrative) ? state = `, ${suggestion.administrative}` : state = "";
    this.setState({
      lat: parseFloat(suggestion.latlng.lat),
      lon: parseFloat(suggestion.latlng.lng),
      loc: `${city}${state}`,
    });
    setCookie("lat", suggestion.latlng.lat);
    setCookie("lon", suggestion.latlng.lng);
    setCookie("loc", `${city}${state}`);
  }

  highlightText(id) {
    return () => {
      const inputField = document.getElementById(`search-bar-input-${id}`);
      inputField.setSelectionRange(0, inputField.value.length);
    }
  }

  render(){
    return (
      <form className="search-bar" onSubmit={this.handleSubmit} autoComplete="off">
        <div className="search-find-bar">
          <label className="search-find-label">
            <span className="field-name">Find</span>
            <input
              onFocus={ this.highlightText(0) }
              onChange={ this.handleFindChange }
              className="search-bar-input"
              type="text"
              name="query"
              value={this.state.query}
              id='search-bar-input-0'
              placeholder="burgers, barbers, spas, handymen..."
            />
          </label>
        </div>

        <div className="search-near-bar">
          <label className="search-near-label">
            <span className="field-name">Near</span>
              <AlgoliaPlaces
              placeholder='address, neighborhood, city, state or zip'
              defaultValue={ this.state.loc }
              onFocus = { this.highlightText(1) }
              id='search-bar-input-1'
              options={{
                appId: window.algAppId,
                apiKey: window.algApiKey,
                language: 'en',
                countries: ['us'],
                type: '',
              }}
              onChange={({ query, rawAnswer, suggestion, suggestionIndex }) =>
                this.handleNearChange(suggestion)
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
  }
}

export default withRouter(SearchForm);
