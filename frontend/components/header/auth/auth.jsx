import React from 'react';
import { Link } from 'react-router-dom';

const Auth = ({ currentUser, logout }) => {
  const authNav = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
    </nav>
  );
  const userNav = () => (
    <nav className="header-group">
      <span>MESSAGE LINK GOES HERE</span>
      <span>MYPROFILE LINK GOES HERE</span>
      <span><button className="header-button" onClick={logout}>Log Out</button></span>
    </nav>
  );

  return currentUser ? userNav(): authNav();
};


export default Auth;
