import pic from './images/startbackground.jpg'
import React, {Component} from 'react';
import { Text, View, Image, ImageBackground, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

const style = {
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View>
      <ImageBackground source={pic} style={style.backgroundImage}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Hello, world!</Text>
          </View>
          <Button
            onPress={() => this.props.navigation.navigate("Welcome")}
            title="Press Me"/>
      </ImageBackground>
      </View>
    );
  }
}
