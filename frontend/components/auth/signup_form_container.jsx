import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mdp = dispatch => {
  return {
    processSignup: (user) => dispatch(signup(user)),
  };
};

export default connect(msp, mdp)(SignupForm);
