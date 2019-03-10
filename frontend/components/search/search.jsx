import React from 'react';
import GeneralHeader from '../header/general_header';
import Footer from '../footer/footer';
import { withRouter } from 'react-router-dom';
import SearchHeader from './search_header'
import SearchBusinessesContainer from './search_businesses_container';
import BusinessesMap from './businesses_map'
import { parseSearchString, isValidSearchString, getUserLocation, convertToHistoryOptions, getSearchFromURL } from '../../util/search_util'
import { setCookie } from '../../util/cookies';

class Search extends React.Component{

  constructor(props){
    super(props);
    this.searchParams = {search: "", query: "", lat: "", lon: "", loc: "", filters: ""};
  }

  componentWillMount(){
    this.setSearchParams();
    if ( this.props.location.search !== this.searchParams.search ) {
      this.props.fetchBusinesses(this.props.location.search);
      this.searchParams.search = this.props.location.search;
    }
  }


  componentDidUpdate(prevProps){
    this.setSearchParams();
    console.log(this.props.location.search);
    console.log(this.searchParams.search);
    if (this.props.location.search !== this.searchParams.search ) {
      this.props.fetchBusinesses(this.props.location.search);
      this.searchParams.search = this.props.location.search;
    }
  }

  setSearchParams(){
    if ( isValidSearchString(this.props.location.search) ){
      const searchParams = parseSearchString(this.props.location.search);
      searchParams.query ? this.searchParams.query = searchParams.query :  this.searchParams.query = "";

      //VALIDATION FOR LOCATION THROUGH ALGOLIA/GOOGLE PLACES API GOES HERE LATER
      if (searchParams.loc){
        this.searchParams.lat = searchParams.lat;
        this.searchParams.lon = searchParams.lon;
        this.searchParams.loc = searchParams.loc;
        setCookie("lat",searchParams.lat);
        setCookie("lon", searchParams.lon);
        setCookie("loc", searchParams.loc);
      } else {
        const userLocationObj = getUserLocation();
        this.searchParams.lat = userLocationObj.lat;
        this.searchParams.lon = userLocationObj.lon;
        this.searchParams.loc = userLocationObj.loc;
      }

      //VALIDATION FOR FILTERS GOES HERE
      searchParams.filters ? this.searchParams.filters = searchParams.filters :  this.searchParams.filters = "";

    } else {
      const userLocationObj = getUserLocation();
      const searchParams = parseSearchString(this.props.location.search);

      searchParams.query ? this.searchParams.query = searchParams.query :  this.searchParams.query = "";
      this.searchParams.lat = userLocationObj.lat;
      this.searchParams.lon = userLocationObj.lon;
      this.searchParams.loc = userLocationObj.loc;
      this.searchParams.filters = "";
      const historyOptions = convertToHistoryOptions(this.searchParams);
      this.props.history.replace(historyOptions);
    }
  }

  render(){
    return (
      <>
        <GeneralHeader />
        <div style={{height: "40px"}}></div>
        <SearchHeader businesses={this.props.businesses} location={this.props.location}/>
        <div className="content-wrapper">
          <div className="main-search-container">
            <div className="left-panel">
              <SearchBusinessesContainer {...this.props}/>
            </div>

            <div className="right-panel">
              <BusinessesMap location={this.props.location} businesses={this.props.businesses}/>
            </div>
          </div>
        </div>

        <div className='main-footer-container'>
          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(Search);
