import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as sessionApiUtil from './util/session_api_util'
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);

  window.signup = sessionApiUtil.signup
  window.login = sessionApiUtil.login
  window.logout = sessionApiUtil.logout
});
