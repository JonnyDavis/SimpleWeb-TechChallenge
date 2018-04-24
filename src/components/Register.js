import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterForm from './Forms/RegisterForm';


const Register = () => {
	return (
		<View>
			<Text> Register </Text>
			<RegisterForm/>
		</View>
		)
}

export default Register;

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