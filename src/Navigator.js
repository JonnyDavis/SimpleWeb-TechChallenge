import { Constants } from 'expo';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import LoginScreen2 from './screens/LoginScreen2';
import RegisterScreen from './screens/RegisterScreen';
import LogoutScreen from './screens/LogoutScreen';

const extraStyles = Platform.select({
	android: {
		marginTop: Constants.statusBarHeight
	}
});


export default StackNavigator({
	Home: { screen: HomeScreen },
	Login: { screen: LoginScreen },
	Register: { screen: RegisterScreen },
	Logout: { screen: LogoutScreen }
}, {
	cardStyle: {
		backgroundColor: '#fff'
	},
	navigationOptions: {
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#68aa63',
			...extraStyles,
		}
	}
}
);

