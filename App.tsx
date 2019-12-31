import pic from './images/startbackground.jpg'
import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Screens/HomeScreen.tsx';
import WelcomeScreen from './Screens/WelcomeScreen.tsx';
import TimeScreen from './Screens/TimeScreen.tsx';
import MeditationScreen from './Screens/MeditationScreen.tsx';
import DoneScreen from './Screens/DoneScreen.tsx';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Welcome: {screen: WelcomeScreen},
  TimeSelect: {screen: TimeScreen},
  Meditation: {screen: MeditationScreen},
  Done: {screen: DoneScreen}
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
