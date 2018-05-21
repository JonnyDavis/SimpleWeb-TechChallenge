import React, { Component } from 'react';
import { connect } from "react-redux";
import { onRegister } from '../auth/authService';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import Input from '../components/Forms/Input';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';



class RegisterScreen extends Component {
	
	static navigationOptions = {	
		title: 'Register'
	};
	
	constructor() {
		super();
	}


	render() {

		const {handleSubmit, error } = this.props;

		const submitForm = e => {
			this.props.register(e.username, e.email, e.password);
		}


		return (

			<View>


				<View>

					<FormLabel>Username</FormLabel>
					<Field name='username' component={renderField} />

					<FormLabel>Email</FormLabel>
					<Field name='email' component={renderField} />
					
					<FormLabel>Password</FormLabel>
					<Field name='password' component={renderPassword} />

					{error && <Text>{error}</Text>}

					<Button
						onPress={handleSubmit(submitForm)}
						title={'Register'}
					/>					

				</View>


			</View>

		)
	}

}

const renderField = ({ input: { onChange, ...restInput }}) => {
	return (
		<FormInput
			onChangeText={onChange}
			{...restInput}
		/>
	);
};

const renderPassword = ({ input: { onChange, ...restInput }}) => {
	return (
		<FormInput
			onChangeText={onChange}
			{...restInput}
			secureTextEntry={true}
		/>
	);
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        // onSubmit is a function which dispatches an action "add"
        register: (username, email, password) => dispatch(onRegister(username, email, password)),

    };
};

let RegisterConnect = connect(null, mapDispatchToProps)(RegisterScreen);
export default reduxForm({
	form: 'registerform'
})(RegisterConnect);	