import React from 'react';
import AuthContainer from '../auth/auth_container'
import { Link } from 'react-router-dom';

 const SplashHeader = () => (
    <header className='splash-header'>
      <div className='left-splash-header-nav'>
        <ul className='left-splash-header-elements'>
          <li><Link to='/'>Write a Review</Link></li>
        </ul>
      </div>
      <AuthContainer className='right-splash-header-nav'/>
    </header>
);

export default SplashHeader;
