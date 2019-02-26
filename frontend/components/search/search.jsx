import React from 'react';
import GeneralHeader from '../header/general_header';
import Footer from '../footer/footer';
import { withRouter } from 'react-router-dom';

class Search extends React.Component{

  constructor(props){
    console.log("SEARCH CONSTRUCTOR");
    super(props);
    this.state = {query: ""};
  }

  componentDidMount(){
    console.log("SEARCH DID MOUNT");
    if (this.props.location.search !== this.state.query) {
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

        <div className='main-footer-container'>
          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(Search);
