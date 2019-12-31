import pic from './images/plainbackground.jpg'
import leaf from './images/leaf.png'

import React, {Component} from 'react';
import { Text, View, Image, ImageBackground, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

const style = {
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  leaf: {
    width: 40,
    height: 40,
    marginLeft: "auto",
    marginRight: "auto",
  }
}

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View>
      <ImageBackground source={pic} style={style.backgroundImage}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Welcome!</Text>
          </View>
          <View>
          <Image source ={leaf} style={style.leaf}/>
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Grab a pair of headphones and find a comfortable seat</Text>
            <Text>Take a deep breath in...</Text>
            <Text>and exhale fully through your mouth.</Text>
            <Text>Set the length of your session and listen carefully.</Text>
            <Text>Tap your screen each time you hear a tone.</Text>
          </View>
          <Button
            onPress={() => {
                this.props.navigation.navigate('Home')}
                }
            title="Begin!"/>
      </ImageBackground>
      </View>
    );
  }
}