import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, withRouter } from 'react-router-dom';
import SplashPage from './splash/splash_page';
import LoginFormContainer from './auth/login_form_container'
import SignupFormContainer from './auth/signup_form_container'
import { AuthRoute } from '../util/route_util'

const App = () => (
  <div>
    <Route exact path="/" component={ SplashPage }/>
    <AuthRoute path="/login" component={ LoginFormContainer }/>
    <AuthRoute path="/signup" component={ SignupFormContainer }/>
  </div>
);

export default withRouter(App);
