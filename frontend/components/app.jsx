import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, withRouter } from 'react-router-dom';
import SplashPage from './splash/splash_page';
import LoginFormContainer from './auth/login_form_container'
import SignupFormContainer from './auth/signup_form_container'
import { AuthRoute } from '../util/route_util'
import BusinessContainer from './business/business_container'
import SearchContainer from './search/search_container'

const App = () => (
  <Switch>
    <Route exact path='/' component={ SplashPage }/>
    <Route exact path='/biz/:id' component= { BusinessContainer }/>
    <Route exact path='/search' component= { SearchContainer }/>
    <AuthRoute path='/login' component={ LoginFormContainer }/>
    <AuthRoute path='/signup' component={ SignupFormContainer }/>
    <Redirect to='/404' />
  </Switch>
);

export default withRouter(App);
