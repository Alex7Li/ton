import pic from '../images/plainbackground.jpg'
import leaf from '../images/leaf.png'

import React, {Component} from 'react';
import { Text, View, Image, ImageBackground, Button, TouchableHighlight} from 'react-native';
import {style} from './Styles.tsx';
import { createStackNavigator } from 'react-navigation-stack';
import * as Font from 'expo-font';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <ImageBackground source={pic} style={style.backgroundImage}>
          <View style={style.container}>
          <Text style={style.textGreen}>Welcome!</Text>
          <Image source ={leaf} style={style.leaf}/>
          <View style={{flex:1}}><Text style={style.textNormal}>Grab a pair of headphones and find a comfortable seat</Text></View>
          <View style={{flex:1}}><Text style={style.textNormal}>Take a deep breath in...</Text></View>
          <View style={{flex:1}}><Text style={style.textNormal}>and exhale fully through your mouth.</Text></View>
          <View style={{flex:1}}><Text style={style.textNormal}>Set the length of your session and listen carefully.</Text></View>
          <View style={{flex:1}}><Text style={style.textNormal}>Tap your screen each time you hear a tone.</Text></View>
          </View>
          <TouchableHighlight style={style.buttonStyle} onPress={() => {this.props.navigation.navigate('TimeSelect')}}>
              <View>
                  <ImageBackground style={style.backgroundImage} source={require('../images/button.png')}>
                  <Text style={style.textBold}>GOT IT.</Text>
                  </ImageBackground>
              </View>
          </TouchableHighlight>
      </ImageBackground>
    );
  }
}