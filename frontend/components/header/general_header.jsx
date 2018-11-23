import React from 'react';
import AuthContainer from '../auth/auth_container'
import { Link } from 'react-router-dom';
import SearchForm from '../search/search_form'

 const GeneralHeader = () => (
    <header className='general-header'>
      <div className='general-header-container'>
        <a href='/'> <img src="/yawp_logo.png" /> </a>
        <SearchForm className='general-search-bar'/>
        <AuthContainer className='general-header-nav'/>
      </div>
    </header>
);

export default GeneralHeader;
