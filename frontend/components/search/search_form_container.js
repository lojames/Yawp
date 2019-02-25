import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions';
import SearchForm from './search_form';

const mdp = dispatch => ({
  fetchBusinesses: (filters) => dispatch(fetchBusinesses(filters))
});

export default connect(null, mdp)(SearchForm);
