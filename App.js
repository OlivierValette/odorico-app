import React from 'react';
import { View } from 'react-native';
import AppNavigator from './navigations/AppNavigator';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchSpots } from "./redux/actions";

store.dispatch(fetchSpots());

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
              <AppNavigator/>
            </View>
        </Provider>
    );
  }
}