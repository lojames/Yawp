import React from 'react';
import { Link } from 'react-router-dom';
import GeneralHeader from '../header/general_header';
import Footer from '../footer/footer';

class Search extends React.Component{
  componentDidMount(){
    console.log(this.props.busininesses)
    this.props.fetchBusinesses();
  }

  render(){
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

export default Search;
