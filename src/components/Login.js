import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import Input from './Forms/Input';
import submit from './Forms/submit';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const renderField = ({ input, ...inputProps, meta: { touched, error } }) => (
	<View>
		<TextInput
		{...input}
		{...inputProps}
		/>
		{ touched && (error && <Text>{error}</Text>) }
	</View>
) 

const renderEmail = ({ input: { onChange, ...restInput }}) => {
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

class Login extends Component {
	constructor(props) {
		super(props);

	}		




	render() {
		const { handleSubmit, error, pristine, reset, submitting, auth } = this.props;
		
		const submitForm = e => {
			this.props.login(e.email, e.password);
		}
		// if(auth.access_token === '') {
			
			return (
		
				<View style={styles.container}>
					

					<View>
					
						<FormLabel>Email</FormLabel>
						<Field name='email' component={renderEmail} />
						
						<FormLabel>Password</FormLabel>
						<Field name='password' component={renderPassword} />
						
						{error && <Text>{error}</Text>}
						
						<View style={styles.button}>
							<Button 
								onPress={handleSubmit(submitForm)}
								title={'Log In'}
								style={styles.button}
							/>
						</View>
						
						<View style={styles.button}>
							<Button onPress={reset} title={'Clear Values'} disabled={pristine || submitting} />
						</View>


{/*						<Text style={styles.goTo}> Go To </Text>

						<View style={styles.button}>
							<Button  title={'Register Screen'} />
						</View>
*/}

					
					</View>
				
				</View>

			)
		/* } else {


						<TouchableOpacity onPress={reset} disabled={pristine || submitting }>
							<Text>Clear Values</Text>
						</TouchableOpacity>
		// 	return (
		// 		<View>
		// 			<Text> Hi </Text>
		// 		</View>
		// 	)
		}*/ 
	}

}

export default reduxForm({ form: 'loginform' })(Login);


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
		height: 40,
		width: 200,
	},
	button: {
		marginTop: 20,
	},
	goTo: {
		fontSize: 16,
		textAlign: 'center',
		paddingTop: 20,
		paddingBottom: 5,
	}
});
