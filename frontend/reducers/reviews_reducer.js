import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/business_actions';
import merge from 'lodash/merge';

const reviewsReducer = (state = {}, action) => {
  console.log('REVIEWS REDUCER')
  debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BUSINESSES:
      return merge({}, state, action.reviews)
    case RECEIVE_BUSINESS:
      return merge({}, action.reviews)
    default:
      return state;
  }
};

export default reviewsReducer;
