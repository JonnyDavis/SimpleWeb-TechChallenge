// Actions
export const setLoginPending = () => {
	return {
		type: 'SET_LOGIN_PENDING'
	};
};
export const setLoginSuccess = (token) => {
	return {
		type: 'SET_LOGIN_SUCCESS',
		token
		//refreshToken
	};
};
export const setLoginError = loginError => {
	return {
		type: 'SET_LOGIN_ERROR',
		loginError
	};
};
export const setLogout = () => {
	return {
		type: 'SET_LOGOUT'
	};
};
export const saveAppToken = token => {
	return {
		type: 'SAVE_APP_TOKEN',
		token
	};
};

//Reducer
let initialState = {
	loginPending: false,
	loggedIn: false,
	loginError: false,
	token: null,
	// refreshToken: null
};

export default function(state = initialState, action) {
	switch (action.type) {
	case 'SET_LOGIN_PENDING':
		return {
			...state,
			loginPending: true
		};
	case 'SET_LOGIN_SUCCESS':
		return {
			...state,
			loginPending: false,
			loggedIn: true,
			loginError: false,
			token: action.token,
			// refreshToken: action.refreshToken
		};
	case 'SET_LOGIN_ERROR':
		return {
			...state,
			loginPending: false,
			loggedIn: false,
			loginError: action.loginError
		};
	case 'SET_LOGOUT':
		return {
			...state,
			token: false,
			refreshToken: false,
			loggedIn: false
		};
	case 'REFRESHING_TOKEN':
		return {
			...state,
			tokenRefreshing: true
		};
	case 'DONE_REFRESHING_TOKEN':
		return {
			...state,
			tokenRefreshing: false
		};
	case 'SAVE_APP_TOKEN':
		return {
			...state,
			token: action.token
		};
	default:
		return state;
	}
}