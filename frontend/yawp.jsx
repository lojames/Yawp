import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as session from './actions/session_actions'
import configureStore from './store/store';

import { fetchBusinesses } from './actions/business_actions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);

});
