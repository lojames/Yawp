import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, withRouter } from 'react-router-dom';
import Header from './header/header';
import LoginFormContainer from './main/auth/login_form_container'
import SignupFormContainer from './main/auth/signup_form_container'
import { AuthRoute } from '../util/route_util'

const App = () => (
  <div>
    <Route exact path="/" component={ Header } />
    <AuthRoute path="/login" component={ LoginFormContainer } />
    <AuthRoute path="/signup" component={ SignupFormContainer } />
  </div>
);

export default withRouter(App);
