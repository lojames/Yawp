import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/business_actions';
import merge from 'lodash/merge';

const businessesReducer = (state = {}, action) => {
  console.log('BUSINESSES REDUCER')
  debugger
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BUSINESSES:
      return merge({}, action.businesses)
    case RECEIVE_BUSINESS:
      return merge({}, action.business)
    default:
      return state;
  }
};

export default businessesReducer;
