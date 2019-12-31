import pic from '../images/startbackground.jpg'
import React, {Component} from 'react';
import { Text, View, Image, ImageBackground, Button, TouchableHighlight} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {style} from './Styles.tsx';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View>
      <ImageBackground source={pic} style={style.backgroundImage}>
          <View style={{ flex: 3}}>
          </View>
      <TouchableHighlight style={style.buttonStyle} onPress={() => {this.props.navigation.navigate('TimeSelect')}}>
      <View>
          <ImageBackground style={style.backgroundImage} source={require('../images/button.png')}>
          <Text style={style.textBold}>START</Text>
          </ImageBackground>
      </View>
        </TouchableHighlight>
                 <View style={{ flex: 1}}>
                  </View>
        <TouchableHighlight style={style.buttonStyle} onPress={() => {this.props.navigation.navigate('Welcome')}}>
            <View>
                <ImageBackground style={style.backgroundImage} source={require('../images/button.png')}>
                <Text style={style.textBold}>INSTRUCTIONS</Text>
                </ImageBackground>
            </View>
        </TouchableHighlight>
      </ImageBackground>
      </View>
    );
  }
}
