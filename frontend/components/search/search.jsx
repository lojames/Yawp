import React from 'react';
import GeneralHeader from '../header/general_header';
import Footer from '../footer/footer';

class Search extends React.Component{
  componentDidMount(){
    this.props.fetchBusinesses({});
  }

  componentDidUpdate(){
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
