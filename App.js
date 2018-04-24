import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import TabNavigator from './src/tabNavigator';
import reducers from './src/store/reducers';


const store = createStore(reducers /*middleware*/);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
  },
});

{/*        <View style={styles.container}>
          <Text style={styles.header}>SimpleWeb Techincal Challenge</Text>
          <Register />
        </View>
*/} 