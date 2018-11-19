import React from 'react';
import SplashHeader from '../header/splash_header';
import SearchForm from '../search/search_form.jsx';
import Footer from '../footer/footer.jsx';
import SplashSearchNavBar from './splash_search_nav_bar'


const SplashPage = () => {
  return (
    <>
      <div className='splash-container-a-background'>
        <div className='splash-container-a'>
          <SplashHeader />
          <div className='splash-container-inner'>
            <div className='splash-logo-container'>
              <a href='/'> <img src="/yawp_logo.png" /> </a>
            </div>
            <div className="search-bar-container">
              <SearchForm className='search-bar'/>
            </div>
            <SplashSearchNavBar />
          </div>
        </div>
      </div>

      <div className='splash-container-c'>

      </div>

      <div className='main-footer-container'>
        <Footer />
      </div>

    </>
  );
};

export default SplashPage;
