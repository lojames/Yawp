import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions';
import Search from './search';

const msp = (state) => {
  console.log("SEARCH MSP");
  console.log(state);
  return ({
    businesses: state.entities.businesses || {},
    images: state.entities.images,
    reviews: state.entities.reviews,
  })
};

const mdp = dispatch => {
  console.log("SEARCH MDP");
  return {
    fetchBusinesses: (query) => dispatch(fetchBusinesses(query))
  };
};

export default connect(msp, mdp)(Search)
