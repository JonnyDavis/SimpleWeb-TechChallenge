import * as authReducer from './authReducer';
import AuthApi from './authAPI';
import { AsyncStorage } from 'react-native';
import App from '../../App';

// function for saving data to a device (will store the token)
const _saveItem = async (item, selectedValue) => {
  try {
    await AsyncStorage.setItem(item, selectedValue);
  } catch (error) {
    throw error;
  }
};

export const onLogin = (email, password) => {
	return dispatch => {
		dispatch(authReducer.setLoginPending());
		return AuthApi.login(email, password)
		.then(response => {
			console.log('maybe');
			console.log(response.success);
			console.log(response.token);
			if (response.success) {
				console.log('yes');
				dispatch(
					authReducer.setLoginSuccess(
						response.token
					)
				);
				_saveItem('token', response.token)
					.then(resp => {
						console.log('loggedIn');
					})
				
			} else {
				console.log('no');
				dispatch(authreducer.setLoginError(response.message));
			}
			
		})
	}
}

export const onLogout = (token) => {
	return dispatch => {
		return AuthApi.logout(token)
		.then(response => {
			console.log(token);
			console.log(response.success);
			if (response.success) {
				console.log('logout success');
				dispatch(
					authReducer.setLogout()
				);
			} else {
				console.log('no logout');
			}
		})
	}
}

export const onRegister = (username, email, password ) => {
	return dispatch => {
		return AuthApi.register(username, email, password)
		.then(response => {
			console.log(response.success);
			if (response.success) {
				console.log('register success')
			}
		})
	}
}
