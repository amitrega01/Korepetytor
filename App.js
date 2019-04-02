import React, { setGlobal } from 'reactn';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FirstRunScreen from './src/screens/FirstRunScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const MainNavigator = createStackNavigator({
  FirstRun: { screen: FirstRunScreen },
  SignUp: { screen: SignUpScreen }
});

const AppContainer = createAppContainer(MainNavigator);
setGlobal({});

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
