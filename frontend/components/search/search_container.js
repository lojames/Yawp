import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions';
import Search from './search';

const msp = (state) => {
  console.log("SEARCH MSP");
  return ({
    businesses: state.entities.businesses || {},
    images: state.entities.businesses.images || {},
    reviews: state.entities.businesses.reviews || {},
  })
};

const mdp = dispatch => {
  console.log("SEARCH MDP");
  return {
    fetchBusinesses: (query) => dispatch(fetchBusinesses(query))
  };
};

export default connect(msp, mdp)(Search)
