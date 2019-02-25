import { connect } from 'react-redux'
import { fetchBusinesses } from '../../actions/business_actions';
import Search from './search';

const msp = (state) => {
  return ({
    businesses: state.entities.businesses || {},
    images: state.entities.businesses.images,
    reviews: state.entities.businesses.reviews,
  })
};

const mdp = dispatch => ({
  fetchBusinesses: () => dispatch(fetchBusinesses())
});

export default connect(msp, mdp)(Search)
