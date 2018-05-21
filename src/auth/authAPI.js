// import { handleErrors } from './errors.api';
import axios from '../axios';

class AuthApi {
	static login(email, password) {
		return fetch(`http://192.168.1.217:8000/api/login`, {
			method: 'POST',
			body: JSON.stringify({ email: email, password: password }),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			// .then(handleErrors)
			.catch(error => {
				throw error;
			});
	}
	static logout(token) {
		return fetch(`http://192.168.1.217:8000/api/logout?token=${token}`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			// .then(handleErrors)
			.catch(error => {
				throw error;
			});
	}
	static register(username, email, password) {
		return fetch(`http://192.168.1.217:8000/api/register`, {
			method: 'POST',
			body: JSON.stringify({ username: username, email: email, password: password }),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			// .then(handleErrors)
			.catch(error => {
				throw error;
			});
	}




	static refreshToken(refreshToken) {
		return fetch(`${config.url}/api/auth/refreshToken`, {
			method: 'POST',
			body: JSON.stringify({ refreshToken: refreshToken }),
			headers: config.configHeaders
		})
			.then(response => response.json())
			.then(handleErrors)
			.catch(error => {
				throw error;
			});
	}
	static checkAuthTest(token) {
		return fetch(`${config.url}/api/auth/getAll`, {
			method: 'POST',
			headers: {
				...config.configHeaders,
				Authorization: 'Bearer ' + token
			}
		})
			.then(response => response.json())
			.then(handleErrors)
			.catch(error => {
				throw error;
			});
	}
}
export default AuthApi;