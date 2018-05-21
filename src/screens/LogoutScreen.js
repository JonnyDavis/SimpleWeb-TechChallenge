import { connect } from 'react-redux';
import Logout from '../components/Logout';
import { onLogout } from '../auth/authService';

// mapping log in token from state to be displayed on Logout Screen
const mapStateToProps = (state, props) => {
	const token = state.get('token');
	return {
		token: token,
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		logout: (token) => dispatch(onLogout(token)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);