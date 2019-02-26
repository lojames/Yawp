import * as APIBiz from '../util/business_api_util';

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES'

export const receiveBusinesses = ( {businesses, reviews, images} ) => {
  return {
    type: RECEIVE_BUSINESSES,
    businesses,
    reviews,
    images,
}};

export const receiveBusiness = ( business ) => {
  return {
    type: RECEIVE_BUSINESS,
    business
}};

export const fetchBusiness = id => dispatch => (
    APIBiz.fetchBusiness(id).then( business => dispatch(receiveBusiness(business)))
);


export const fetchBusinesses = query => dispatch => (
    APIBiz.fetchBusinesses(query).then( businesses => dispatch(receiveBusinesses(businesses)))
);
