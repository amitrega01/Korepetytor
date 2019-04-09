import React, { setGlobal } from 'reactn';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FirstRunScreen from './src/screens/FirstRunScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import StudentHomeScreen from './src/screens/StudentHomeScreen';
import CoachHomeScreen from './src/screens/CoachHomeScreen';

const MainNavigator = createStackNavigator({
  FirstRun: { screen: FirstRunScreen },
  SignUp: { screen: SignUpScreen },
  SignIn: { screen: SignInScreen },
  StudentHome: { screen: StudentHomeScreen },
  CoachHome: { screen: CoachHomeScreen }
});

const AppContainer = createAppContainer(MainNavigator);
setGlobal({});

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
