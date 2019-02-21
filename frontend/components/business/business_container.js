import { connect } from 'react-redux'
import { fetchBusiness, fetchImages } from '../../actions/business_actions';
import Business from './business';

const msp = (state, ownProps) => {
  const defaultBusiness = {
    num_reviews: 0 ,
    SplashCategories: 0,
    id: -1,
    name: "",
    neighborhood: "",
    street_address: "",
    city: "",
    state: "",
    zip: "",
    latitude: 0,
    longitude: 0,
    phone: "",
    website: "",
    price: "",
    business_hours: [],
    image_ids: [],
  }

  return ({
    business: state.entities.businesses[ownProps.match.params.id] || defaultBusiness,
    images: state.entities.businesses.images,
    reviews: state.entities.businesses.reviews,
  })
};

const mdp = dispatch => ({
  fetchBusiness: id => dispatch(fetchBusiness(id))
});

export default connect(msp, mdp)(Business)
