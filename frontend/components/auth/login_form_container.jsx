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
  return {
    processLogin: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default connect(msp, mdp)(LoginForm);
