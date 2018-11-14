import {
  RECEIVE_USER,
  LOGOUT_USER,
} from '../actions/session_actions';

const guestUser = Object.freeze({
  id: null
});

const sessionReducer = (state = guestUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return { id: action.currentUser.id };
    case LOGOUT_USER:
      return guestUser;
    default:
      return state;
  }
};

export default sessionReducer;
