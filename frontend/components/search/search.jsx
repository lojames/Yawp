import React from 'react';
import GeneralHeader from '../header/general_header';
import Footer from '../footer/footer';
import { withRouter } from 'react-router-dom';
import SearchHeader from './search_header'
import SearchBusinessesContainer from './search_businesses_container';
import BusinessesMap from './businesses_map'

class Search extends React.Component{

  constructor(props){
    console.log("SEARCH CONSTRUCTOR");
    super(props);
    this.state = {query: ""};
  }

  componentDidMount(){
    console.log("SEARCH DID MOUNT");
    if (this.props.location.search !== this.state.query) {
      console.log(this.props.location.search);
      this.props.fetchBusinesses(this.props.location.search);
      this.setState({query: this.props.location.search});
    }
  }

  componentDidUpdate(){
    console.log("SEARCH UPDATE");
    if (this.props.location.search !== this.state.query) {
      this.props.fetchBusinesses(this.props.location.search);
      this.setState({query: this.props.location.search});
    }
  }

  render(){
    console.log("SEARCH RENDER");
    console.log(this.props);
    return (
      <>
        <GeneralHeader />
        <div style={{height: "40px"}}></div>
        <SearchHeader businesses={this.props.businesses} location={this.props.location}/>

        <div className="main-search-container">
          <div className="left-panel">
            <SearchBusinessesContainer {...this.props}/>
          </div>

          <div className="right-panel">
            <BusinessesMap />
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
