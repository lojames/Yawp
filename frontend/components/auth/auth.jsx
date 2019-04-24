import React from 'react';
import { Link } from 'react-router-dom';

const Auth = ({ currentUser, logout }) => {
  const dropDown = () => {
    const userNavDropdown = document.getElementById("user-nav-dropdown-id");
    userNavDropdown.style.display = "block";
  }

  window.onclick = (event) => {
    if (!(event.target.matches('.user-nav') || event.target.matches('.user-nav-0') || event.target.matches('.user-nav-1') )) {
      const userNavDropdownRemove = document.getElementById("user-nav-dropdown-id");
      userNavDropdownRemove.style.display = "none";
    }
  }

  const authNav = () => (
    <ul className="not-logged-in">
      <li className='not-logged-in-login'><Link to="/login">Log In</Link></li>
      <li className='not-logged-in-signup'><Link to="/signup" className="signup-link">Sign Up</Link></li>
    </ul>
  );

  const userNav = () => (
    <>
    <div className="logged-in-notifications">
      <div className="message-icon">
        <svg id="24x24_speech" height="100%" viewBox="0 0 24 24" width="100%">
          <path d="M18 3H6C4.34 3 3 4.34 3 6v7c0 1.66 1.34 3 3 3h2v5l5-5h5c1.66
            0 3-1.34 3-3V6c0-1.66-1.34-3-3-3z">
          </path>
        </svg>
      </div>
      <div className="profile-icon">
        <svg id="24x24_notification" height="100%" viewBox="0 0 24 24"
          width="100%">
          <path d="M20.984 17.177A1 1 0 0 1 20 18H4a1 1 0 0
          1-.348-1.938c2.43-.9 3.74-4.605 3.74-7.634 0-1.75 1.07-3.253
          2.608-3.97V4a2 2 0 0 1 4 0v.457c1.538.718 2.61 2.22 2.61 3.97 0
          3.03 1.31 6.734 3.738 7.635a1 1 0 0 1 .636 1.115zM12 22a3 3 0 0
          1-3-3h6a3 3 0 0 1-3 3z">
          </path>
        </svg>
      </div>
    </div>

    <div className="user-nav" onClick={dropDown}>
      <span className="logged-in-user-avatar-clickable">
        <img className="user-nav-0" onClick={dropDown} src='./avatar.png' />
      </span>
      <span className='user-nav-clickable'>
        <svg className="user-nav-1" onClick={dropDown} id="14x14_triangle_down" height="100%" viewBox="0 0 14 14"
          width="100%">
          <path d="M7 9L3.5 5h7L7 9z"></path>
        </svg>
      </span>
      <span className="user-nav-dropdown-aligner">
        <ul id="user-nav-dropdown-id" className="user-nav-dropdown">
          <li className="logout" onClick={logout}>Log Out</li>
        </ul>
      </span>
    </div>
  </>
  );

  return currentUser ? userNav(): authNav();
};


export default Auth;
