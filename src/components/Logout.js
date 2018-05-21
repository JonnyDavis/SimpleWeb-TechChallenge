import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';



class Logout extends Component {
	constructor(props) {
		super(props);

	}		


	



	render() {

		const { handleSubmit, token } = this.props;

			const submitForm = e => {
				this.props.logout({token});
			}

		return (

			<View style={styles.container}>
				<Text style={styles.header}> You have successfully logged in with token: { token } </Text>


				<Button
					onPress={handleSubmit(submitForm)}
					title={'Log out'}
				/>




			</View>
		)
	}
}

export default Logout;



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
	}
});