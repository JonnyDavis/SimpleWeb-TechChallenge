import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import Input from '../components/Forms/Input';
import submit from '../components/Forms/submit';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { connect } from 'react-redux';
import { onLogin, onLogout } from '../auth/authService';


class LoginScreen extends Component {
	
	static navigationOptions = {
  		title: 'Login'
  	};

	constructor(props) {
		super(props);

		
	}		




	render() {
		const { handleSubmit, error, pristine, reset, submitting, auth } = this.props;
		
		const submitForm = e => {
			this.props.login(e.email, e.password);
		}

		const submitLogout = () => {
			this.props.logout(this.props.token);
		}

		return (
	
			<View style={styles.container}>

				{ this.props.loggedIn ? (
			
				<View>
					
					<Text> You are logged in with token{ this.props.token } </Text>
					
					<View style={styles.button}>
						<Button onPress={handleSubmit(submitLogout)} title={'Log Out'} />
					</View>		

				</View>	


				) : (

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
				
				</View>					

				)}	
			
			</View>

		)

	}
}


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

const mapStateToProps = (state) => {
	return {
		token: state.auth.token,
		loggedIn: state.auth.loggedIn,
		
	};
};

const mapDispatchToProps = (dispatch) => {
    return {
        // onSubmit is a function which dispatches an action "add"
        login: (email, password) => dispatch(onLogin(email, password)),
        logout: (token) => dispatch(onLogout(token)),
 
    };
};

let LoginConnect = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export default reduxForm({
	form: 'loginform'
})(LoginConnect);

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


