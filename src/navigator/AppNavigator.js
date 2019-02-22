import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../pages/Home';
import Test from '../pages/Test';

export const RootNavigator = createAppContainer(createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  },
  Test: {
    screen: Test,
  },
}));