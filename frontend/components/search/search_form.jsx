import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component{

  constructor(props){
    console.log("SF PROPS");
    super(props);
    this.state = {
      query: "",
      lat: "",
      lon: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFindChange = this.handleFindChange.bind(this);
  }

  componentDidMount(){
    console.log("SF DID MOUNT");
    if (!this.getCookie("lat")){
      this.setState({lat: window.userData.latitude, lon: window.userData.longitude});
      this.setCookie("lat", window.userData.latitude);
      this.setCookie("lon", window.userData.longitude);
      this.setCookie("userLocation", `${window.userData.city}, ${window.userData.region_name}`);
    } else {
      this.setState({
        lat: parseFloat(this.getCookie("lat")),
        lon: parseFloat(this.getCookie("lon")),
        userLocation: this.getCookie("userLocation")
      });
    }
  }

  componentDidUpdate(){
    console.log("SF DID UPDATE");
    console.log(this.props);
  }



  handleSubmit(e) {
    e.preventDefault();
    if (this.props.location.pathname === '/search'){
      this.props.history.replace({
        pathname: '/search',
        search: `?query=${this.state.query}&lat=${this.state.lat}&lon=${this.state.lon}`,
        state: this.state
      });
    } else {
      this.props.history.push({
        pathname: '/search',
        search: `?query=${this.state.query}&lat=${this.state.lat}&lon=${this.state.lon}`,
        state: this.state,
      });
    }
  }


  handleFindChange(e){
    this.setState({query: e.target.value});
  }

  handleNearChange(suggestion){
    let city, state;
    (suggestion.city) ? city = suggestion.city : city = suggestion.name;
    (suggestion.administrative) ? state = `, ${suggestion.administrative}` : state = "";
    this.setState({lat: parseFloat(suggestion.latlng.lat), lon: parseFloat(suggestion.latlng.lng)});
    this.setCookie("lat", suggestion.latlng.lat);
    this.setCookie("lon", suggestion.latlng.lng);
    this.setCookie("userLocation", `${city}${state}`);
  }

  highlightText(id) {
    return () => {
      const inputField = document.getElementById(`search-bar-input-${id}`);
      inputField.setSelectionRange(0, inputField.value.length);
    }
  }

  getCookie(name) {
    const regexp = new RegExp("(?<="+name+"=).*?(?=;)|(?<="+name+"=).*?$");
    const result = regexp.exec(document.cookie);
    return (result === null) ? null : result[0];
  }

  setCookie(name, value) {
    document.cookie = `${name} = ${value}`;
  }

  render(){
    console.log("SF RENDER");
    console.log(this.props);
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
              defaultValue={this.getCookie("userLocation")}
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

        <input
          type="hidden"
          name="lat"
          value={this.state.lat}
          id='search-bar-input-2'
        />

        <input
          type="hidden"
          name="lon"
          value={this.state.lon}
          id='search-bar-input-3'
        />

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
