import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import Input from './Input';


const validate = values => {
	const errors = {}
	if (!values.name) {
		errors.name = 'Required'
	} else if (values.name.length > 30) {
		errors.name = 'Must be 30 characters or less'
	}
	if (!values.email) {
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
    } 
    return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<View>
		<TextInput
		style={styles.input}
		{...input}
		type={type}
		/>
		{touched && (error && <Text>{error}</Text>)}
	</View>

)


class RegisterForm extends Component {
	constructor(props) {
		super(props);

	
	}		

	handleRegister(){
		console.log("register function");
	}

	render() {
		const { handleSubmit, submitting, reset, pristine  } = this.props;
		return (
			<View>
			<Field placeholder='name' component={renderField} name={'name'} type="text" />
			<Field placeholder='Email' component={renderField} name={'email'} type="email" />
			<Field placeholder='Password' secureTextEntry={true} component={Input} name={'password'} type="password" />
			<TouchableOpacity onPress={this.handleSubmit} disabed={submitting} >
				<Text> Register </Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={ reset } disabed={pristine || submitting} >
				<Text> Clear Values </Text>
			</TouchableOpacity>
			</View>


			)
	}

}

export default reduxForm({
	form: 'register',
	validate
})(RegisterForm);


const styles = StyleSheet.create({
	input: {
		fontSize: 14,
		width: 200,
	}
});