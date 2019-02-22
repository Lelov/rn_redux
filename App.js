import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { RootNavigator } from './src/navigator/AppNavigator';
import store from './src/store';

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}



