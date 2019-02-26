import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions';
import SearchForm from './search_form';

const msp = (state) => {
  console.log("SF MSP");
  return ({
    businesses: state.entities.businesses || {},
    images: state.entities.businesses.images || {},
    reviews: state.entities.businesses.reviews || {},
  })
};

const mdp = dispatch => {
  console.log("SF MDP");
  return (
  fetchBusinesses: (query) => dispatch(fetchBusinesses(query))
  );
};

export default connect(msp, mdp)(SearchForm);
