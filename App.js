/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import saga from "redux-saga";
import * as reducers from "./src/reducers";
import sagaRoot from "./src/sagas";
import UserRepo from "./src/components/userrepos/UserRepo";

// The middlewares which will be used in this App
const middlewares = [];
// Initialize the reducers
const reducer = combineReducers(reducers);
// Initialize the saga middleware
const sagaMiddleware = saga();

middlewares.push(sagaMiddleware);
// if (process.env.NODE_ENV === 'development') {
//   const logger = createLogger();
//   middlewares.push(logger);
// }

const store = createStore(reducer, applyMiddleware(...middlewares));
sagaMiddleware.run(sagaRoot);

export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>

      // </View>
      <Provider store={store}>
        <UserRepo />
      </Provider>
    );
  }
}
