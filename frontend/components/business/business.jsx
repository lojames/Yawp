import React from 'react';
import { Link } from 'react-router-dom';
import GeneralHeader from '../header/general_header';
import BusinessHeader from './business_header';

class Business extends React.Component{
  componentDidMount(){
    this.props.fetchBusiness(this.props.match.params.id);
  }


  render(){
    return (
      <>
        <GeneralHeader />
        <div style={{height: "40px"}}></div>
        <BusinessHeader business={this.props.business} />
      </>
    );
  }
}

export default Business;
