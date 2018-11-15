import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as session from './actions/session_actions'
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);

  window.getState = store.getState;
  window.signup = session.signup
  window.login = session.login
  window.logout = session.logout
  window.dispatch = store.dispatch;
});
