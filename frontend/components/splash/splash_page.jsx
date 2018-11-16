import React from 'react';
import SplashHeader from '../header/splash_header';

const SplashPage = () => {
  return (
    <div className="splash-all">
      <div className='splash-container-a-background'>
        <div className='splash-container-a'>

          <div className='splash-container-a-subcontainer'>
            <SplashHeader />
            <div className='splash-container-inner'>
              <div className='splash-logo-container'>
                <a href='/'> <img src="/yawp_logo.png" /> </a>
              </div>
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

    </div>
  );
};

export default SplashPage;