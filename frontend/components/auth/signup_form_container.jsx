import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mdp = dispatch => {
  return {
    processSignup: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default connect(msp, mdp)(SignupForm);
