import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const receiveUser = currentUser => ({
  type: RECEIVE_USER,
  currentUser
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveUser(user))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const login = user => dispatch => {
  return (
  APIUtil.login(user).then(user => (
    dispatch(receiveUser(user))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
)};

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutUser())
  ))
);

export const removeErrors = () => dispatch => {
  dispatch({type: CLEAR_ERRORS})
};
