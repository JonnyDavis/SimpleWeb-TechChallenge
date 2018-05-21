import React from 'react';
import { Constants } from 'expo';
import { Platform } from 'react-native';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Register from './screens/RegisterScreen';
import Login from './screens/LoginScreen.js';

const extraStyles = Platform.select({
	android: {
		marginTop: Constants.statusBarHeight
	}
});

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Login />
      </View>
    );
  }
}

class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Register />
      </View>
    );
  }
}

export default TabNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
}, 	{
	cardStyle: {
		backgroundColor: '#fff'
	},
	navigationOptions: {
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#BE0B1E',
			marginTop: 24,
		}
	},
}
);

