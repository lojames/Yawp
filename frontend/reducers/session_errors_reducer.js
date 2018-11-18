import { RECEIVE_SESSION_ERRORS, RECEIVE_USER, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_USER:
      return [];
    default:
      return [];
  }
};

export default sessionErrorsReducer;
