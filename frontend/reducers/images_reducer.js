import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/business_actions';
import merge from 'lodash/merge';

const imagesReducer = (state = {}, action) => {
  Object.freeze(state);
  console.log('IMAGES REDUCER')
  debugger
  switch(action.type) {
    case RECEIVE_BUSINESSES:
      return merge({}, state, action.images)
    case RECEIVE_BUSINESS:
      return merge({}, action.images)
    default:
      return state;
  }
};

export default imagesReducer;
