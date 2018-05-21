import React, { Component } from 'react';
import { connect } from "react-redux";
import Register from '../components/Register';
import addUser from '../data/api'; 
import { onRegister } from '../auth/authService';


const mapDispatchToProps = (dispatch, props) => {
    return {
        // onSubmit is a function which dispatches an action "add"
        register: (username, email, password) => dispatch(onRegister(username, email, password)),

    };
};

class RegisterScreen extends Component {
  static navigationOptions = {
  	title: 'Register'
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
      	<Register />
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(Register);