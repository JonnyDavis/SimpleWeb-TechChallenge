import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import Input from './Input';
import submit from './submit';

const renderField = ({ input, ...inputProps, meta: { touched, error } }) => (
	<View>
		<TextInput
		{...input}
		{...inputProps}
		/>
		{ touched && (error && <Text>{error}</Text>) }
	</View>
) 


class LoginForm extends Component {
	constructor(props) {
		super(props);

	}		

	handleLogin(){
		console.log("login function");
	}

	render() {
		const { handleSubmit, error, pristine, reset, submitting } = this.props;
		return (
		<View>
		
			<Field 
			name='email' 
			component={renderField} 
			placeholder='Email'
			autoCapitalize="none"
			/>
			<Field 
			placeholder='Password' 
			component={renderField} 
			name='password' 
			secureTextEntry={true}
			autoCapitalize="none" 
			/>
			
			{error && <Text>{error}</Text>}
			
			<TouchableOpacity onPress={handleSubmit(submit)}>
				<Text>Login</Text>
			</TouchableOpacity>
			
			<TouchableOpacity onPress={reset} disabled={pristine || submitting }>
				<Text>Clear Values</Text>
			</TouchableOpacity>			
		
		</View>


		)
	}

}

export default reduxForm({ form: 'login' })(LoginForm);


const styles = StyleSheet.create({
	input: {
		height: 40,
		width: 200,
	}
});