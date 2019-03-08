import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions';
import Search from './search';

const msp = (state) => {
  return ({
    businesses: state.entities.businesses || {},
    images: state.entities.images,
    reviews: state.entities.reviews,
  })
};

const mdp = dispatch => {
  return {
    fetchBusinesses: (query) => dispatch(fetchBusinesses(query))
  };
};

export default connect(msp, mdp)(Search)
