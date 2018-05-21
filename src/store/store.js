import React from 'react';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

const middleware = applyMiddleware(thunk);



const store = createStore(reducer, composeWithDevTools(middleware));

export default store;