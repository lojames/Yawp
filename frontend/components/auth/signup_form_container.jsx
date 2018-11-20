import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

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
    processSignup: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
    demoLogin: () => dispatch(login(demoUser)),
  };
};

export default connect(msp, mdp)(SignupForm);
