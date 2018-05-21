import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import Input from './Forms/Input';


const validate = values => {
	const errors = {}
	if (!values.username) {
		errors.username = 'Required'
	} else if (values.username.length > 30) {
		errors.username = 'Must be 30 characters or less'
	}
	if (!values.email) {
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
    } 
    return errors
}

const renderField = ({ input, ...inputProps, meta: { touched, error } }) => (
	<View>
		<TextInput
		style={styles.input}
		{...input}
		{...inputProps}
		/>
		{touched && (error && <Text>{error}</Text>)}
	</View>

)


class RegisterForm extends Component {
	constructor(props) {
		super(props);

	
	}		



	render() {
		const { handleSubmit, submitting, reset, pristine, onRegister  } = this.props;
		return (
	
			<View style={styles.container}>
				
				<Text style={styles.header}> Register </Text>

				<View>
				
					<Field 
					placeholder='Username' 
					component={renderField} 
					name='username' 		
					/>
					<Field 
					placeholder='Email' 
					component={renderField} 
					name='email' 
					/>
					<Field 
					placeholder='Password' 
					secureTextEntry={true} 
					component={Input} 
					name={'password'} 
					/>
					
					<TouchableOpacity onPress={handleSubmit(onRegister)} disabed={submitting} >
						<Text> Register </Text>
					</TouchableOpacity>
					
					<TouchableOpacity onPress={ reset } disabed={pristine || submitting} >
						<Text> Clear Values </Text>
					</TouchableOpacity>
				
				</View>
			
			</View>

			)
	}

}

export default reduxForm({
	form: 'register',
	validate
})(RegisterForm);



const styles = StyleSheet.create({
  	container: {
	    flex: 1,
	    backgroundColor: '#fff',
	    alignItems: 'center',
	    justifyContent: 'flex-start',
	    marginTop: 20,
  },
  	header: {
    	fontSize: 18,
  },
	input: {
		fontSize: 14,
		width: 200,
	}
});