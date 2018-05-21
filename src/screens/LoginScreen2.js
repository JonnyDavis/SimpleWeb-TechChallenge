import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { onLogin } from '../auth/authService';
import { loginUser, loginUser2 } from '../data/api';

const mapDispatchToProps = (dispatch, props) => {
    return {
        // onSubmit is a function which dispatches an action "add"
        login: (email, password) => dispatch(onLogin(email, password)),

    };
};


class LoginScreen extends Component {
  static navigationOptions = {
  	title: 'Login'
  };
  constructor() {
  	super();

  	//this.navigateToDetailScreen = this.navigateToDetailScreen.bind(this);
  }

  // componentDidMount() {
  // 	this.props.fetchFilms()// Dispatch our action
  	
  // }


// Passing data through to the Detail Screen
  // navigateToDetailScreen( film ) {
  // 	this.props.navigation.navigate('Detail', film);

  // }


  render() {
    return (
      <View style={styles.container}>
      	<Login /*onRegisterSelected={ this.props.navigation.navigate('Register') }*//>
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});