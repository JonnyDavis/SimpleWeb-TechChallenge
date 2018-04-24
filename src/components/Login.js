import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './Forms/LoginForm';

const Login = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}> Login </Text>
			<LoginForm />
		</View>
		)
}

export default Login;

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
});