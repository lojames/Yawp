import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/business_actions';
import merge from 'lodash/merge';

const imagesReducer = (state = {}, action) => {
  (action.images);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BUSINESSES:
      return merge({}, action.images)
    case RECEIVE_BUSINESS:
      return merge({}, action.images)
    default:
      return state;
  }
};

export default imagesReducer;
