import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LoginForm from './Forms/LoginForm';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import Input from './Input';
import submit from './submit';

const Login2 = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}> Login2 </Text>
			<LoginForm />
		</View>
		)
}

export default Login2;

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