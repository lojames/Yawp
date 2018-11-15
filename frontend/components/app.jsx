import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, BrowserRouter } from 'react-router-dom';
import Header from './header/header';


const App = () => (
  <div>
    <Header />
  </div>
);

export default App;
