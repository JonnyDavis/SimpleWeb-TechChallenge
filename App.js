import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './src/components/Register';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer as formReducer } from 'redux-form';


const reducers = combineReducers({
  form: formReducer
});

const store = createStore(reducers /*middleware*/);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.header}>SimpleWeb Techincal Challenge</Text>
          <Register />
        </View>
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
