import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../../actions/session_actions';
import LoginForm from './login_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mdp = dispatch => {
  return {
    processLogin: (user) => dispatch(login(user)),
  };
};

export default connect(msp, mdp)(LoginForm);