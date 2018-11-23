import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/business_actions';
import merge from 'lodash/merge';

const imagesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BUSINESS:
      return merge({}, action.images)
    case RECEIVE_BUSINESS:
      return merge({}, action.images)
    default:
      return state;
  }
};

export default imagesReducer;