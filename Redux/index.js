import {AppRegistry} from 'react-native';
import App from './app/containers/App';

//afterr redux
import React from 'react';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

import configureStore from './app/redux/store';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

// before redux
// AppRegistry.registerComponent(appName, () => App);

//after redux
AppRegistry.registerComponent(appName, () => RNRedux);
