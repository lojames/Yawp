import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mdp = dispatch => {
  const demoUser = {
    email: 'a@gmail.com', password: 'starwars'
  }
  return {
    processLogin: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
    demoLogin: () => dispatch(login(demoUser)),
  };
};

export default connect(msp, mdp)(LoginForm);
