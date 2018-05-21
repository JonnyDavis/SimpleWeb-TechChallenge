import axios from '../axios';
// import fromJS - converts a regular JS object into an Immutable one
import fromJS from 'immutable';

import createUser from './actions';
import logUser from './actions';

export const loginUser2 = (email, password) => dispatch => {
	console.log('hello');
	fetch("http://192.168.1.217:8000/api/login", { 
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ 
			email: 'jonny199@hotmail.co.uk',
			password: 'tester'
		}),
	}).then(response => {
		response.json();
		console.log('success');


	})

		.catch(function (error) {
    		if (error.response) {
    			console.log(error.response.data);
    			console.log(error.response.status);
    			console.log(error.response.headers);	
    		} else if (error.request) {
    			console.log(error.request);
    		} else {
    			console.log('Error', error.message);
    		}
    		console.log(error.config);
    		
		});
}

// axios function below, switched to fetch due to an issue with axios, reportedly corrupted headers? Took me a number of days to realise this was the issue :(


 export const loginUser = (email, password) => dispatch => {
	console.log('hello');
	axios.post("/login/", { 
		email: 'jonny199@hotmail.co.uk',
		password: 'tester'
	}).then(response => {
		console.log('it works');
		console.log(response.data);
		console.log(response.data.token);
		console.log(response.data.success);



		


	})
	
	// .catch(error => {
	// 	throw error;
	// });


		.catch(function (error) {
    		if (error.response) {
    			console.log(error.response.data);
    			console.log(error.response.status);
    			console.log(error.response.headers);	
    		} else if (error.request) {
    			console.log(error.request);    		
    		} else {
    			console.log('Error', error.message);
    		}
    		console.log(error.config);
    		
		});
}


/*
export const addUser = ({ username, email, password}) => dispatch => {
	axios.post("/register", {
		username: username,
		email: email,
		password: password,
	}).then(response => {
		dispatch(createUser(username, email, password));
	})
}


export const logoutUser = ({ email }) => dispatch => {
	axios.post("/logout", {
		email: email,
	}).then(response => {
		dispatch()
	})
}


export const plusArticle = ({ title, article }) => dispatch => {
	axios.post("/articles", {
		title: title,
		article: article,	
	}).then(response => {
		const articles = fromJS(response.data);
		dispatch(addArticle(title, article));
	})
}

*/