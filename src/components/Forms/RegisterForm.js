import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import Input from './Input';

class RegisterForm extends Component {
	constructor(props) {
		super(props);

	}		


	render() {
		const { handleSubmit  } = this.props;
		return (
			<View>
			<Field placeholder='Name' component={Input} name={'name'} />
			<Field placeholder='Email' component={Input} name={'email'} />
			<Field placeholder='Password' secureTextEntry={true} component={Input} name={'password'} />
			<TouchableOpacity onPress={ handleSubmit }>
				<Text> Register </Text>
			</TouchableOpacity>
			</View>


			)
	}

}

export default reduxForm({ form: 'register' })(RegisterForm);