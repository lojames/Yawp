import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import businessesReducer from './businesses_reducer'
import reviewsReducer from './reviews_reducer'
import imagesReducer from './images_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  businesses: businessesReducer,
  images: imagesReducer,
  reviews: reviewsReducer,
});

export default entitiesReducer;
