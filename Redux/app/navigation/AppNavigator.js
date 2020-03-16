import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/Home';
import ViewData from '../screens/ViewData';
import UpdateData from '../screens/UpdateData';
import DataItems from '../screens/DataItems';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {headerShown: true},
    },
    ViewData: {
      screen: ViewData,
      navigationOptions: {headerShown: true},
    },
    UpdateData: {
      screen: UpdateData,
      navigationOptions: {headerShown: true},
    },
    DataItems: {
      screen: DataItems,
      navigationOptions: {headerShown: true},
    },
  },
  {initialRouteName: 'Home'},
);

const App1 = createAppContainer(AppNavigator);

export default App1;
