import React from 'react';
import SplashHeader from '../header/splash_header';
import SearchForm from '../search/search_form.jsx';

const imageRandom = () => {

}

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
          </div>
        </div>
      </div>

      <div className='splash-container-b'>

      </div>

      <div className='splash-container-c'>

      </div>

      <div className='splash-container-d'>
        FOOTER GOES HERE
      </div>

    </>
  );
};

export default SplashPage;
