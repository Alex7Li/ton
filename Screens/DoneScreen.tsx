import pic from '../images/plainbackground.jpg'
import leaf from '../images/leaf.png'

import React, {Component} from 'react';
import {AsyncStorage, Text, View, Image, ImageBackground, Button, TouchableHighlight} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {style} from './Styles.tsx';

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.setTime();
  }
  static navigationOptions = {
    title: 'Complete!',
  };
  async setTime() {
     await AsyncStorage.setItem('@time', String(this.props.navigation.getParam("time")))
  };

  render() {
    return (
      <View>
      <ImageBackground source={pic} style={style.backgroundImage}>
            <View style={style.container}>
            <Text style={style.textBigger}>Session Complete.</Text>
            <Text style={style.textGreen} >Great Job!</Text>
            <Image source ={leaf} style={style.leaf}/>
            </View>
            <View style={style.container}>
            <Text style={style.textBig}>{String(Math.floor(this.props.navigation.getParam("time")/60))}</Text>
            <Text style={style.textBold}>MINUTES IN TOTAL</Text>
            </View>
        <TouchableHighlight style={style.buttonStyle} onPress={() => {this.props.navigation.navigate("Home")}}>
            <View>
                <ImageBackground style={style.backgroundImage} source={require('../images/button.png')}>
                <Text style={style.textBold}>Done</Text>
                </ImageBackground>
            </View>
        </TouchableHighlight>
      </ImageBackground>
      </View>
    );
  }
}