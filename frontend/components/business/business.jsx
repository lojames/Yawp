import React from 'react';
import { Link } from 'react-router-dom';
import GeneralHeader from '../header/general_header';
import BusinessHeader from './business_header';
import BusinessSubheader from './business_subheader';
import BusinessReviewsContainer from './business_reviews_container';
import BusinessHoursContainer from './business_hours_container';
import Footer from '../footer/footer';

class Business extends React.Component{
  componentDidMount(){
    this.props.fetchBusiness(this.props.match.params.id);
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchBusiness(this.props.match.params.id);
    }
  }


  render(){
    console.log("!!!!!!!!!!!!!!!!!!!!!!!BUSINESS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log(this.props);
    return (
      <>
        <GeneralHeader />
        <div style={{height: "40px"}}></div>
        <div className="main-business-header-wrap">
          <div className="main-business-header-container">
            <BusinessHeader business={this.props.business}/>
            <BusinessSubheader business={this.props.business} images={this.props.images}/>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="main-business-container">
            <div className="left-panel">
              <BusinessReviewsContainer business={this.props.business} reviews={this.props.reviews}/>
            </div>

            <div className="right-panel">
              <BusinessHoursContainer businessHours={this.props.business.business_hours}/>
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

export default Business;
