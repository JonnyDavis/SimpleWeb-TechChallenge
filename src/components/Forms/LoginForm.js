import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import Input from './Input';

class LoginForm extends Component {
	constructor(props) {
		super(props);

	}		


	render() {
		const { handleSubmit  } = this.props;
		return (
			<View>
			<Field placeholder='Email' component={Input} name={'email'} />
			<Field placeholder='Password' secureTextEntry={true} component={Input} name={'password'} />
			<TouchableOpacity onPress={ handleSubmit }>
				<Text> Login </Text>
			</TouchableOpacity>
			</View>


			)
	}

}

export default reduxForm({ form: 'login' })(LoginForm);