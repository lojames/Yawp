import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, BrowserRouter } from 'react-router-dom';
import Header from './header/header';
import LoginFormContainer from './main/auth/login_form_container'
import SignupFormContainer from './main/auth/signup_form_container'


const App = () => (
  <div>
    <Header />

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
