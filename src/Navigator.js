import { Constants } from 'expo';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const extraStyles = Platform.select({
	android: {
		marginTop: Constants.statusBarHeight
	}
});


export default StackNavigator({
	Home: { screen: HomeScreen },
	Login: { screen: LoginScreen },
	Register: { screen: RegisterScreen }
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

