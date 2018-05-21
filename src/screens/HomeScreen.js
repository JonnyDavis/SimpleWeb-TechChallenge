import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';


class HomeScreen extends Component {
  static navigationOptions = {
  	title: 'Home'
  };


  render() {
    return (
      <View style={styles.container}>
			<View style={styles.button}>
				<Button  onPress={ () => this.props.navigation.navigate('Register') }title={'Register Screen'} />
			</View>

			<View style={styles.button}>
				<Button  onPress={ () => this.props.navigation.navigate('Login') }title={'Login Screen'} />
			</View>
      </View>
    );
  }
}
export default HomeScreen;


const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: 20,
    },
  	button: {
		marginTop: 20,
	},
});