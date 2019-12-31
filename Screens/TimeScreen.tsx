import leaf from '../images/leaf.png'

import React, {Component} from 'react';
import { Text, View, Image, ImageBackground, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

const style = {
}

export default class TimeScreen extends React.Component {
  static navigationOptions = {
    title: 'Time Select',
  };
  render() {
    return (
      <View style={{background-color:"#F9F7EB"}}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Welcome!</Text>
          </View>
          <View>
          <Image source ={leaf} style={style.leaf}/>
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          </View>
          <Button
            onPress={() => {
                this.props.navigation.navigate('Home')}
                }
            title="Begin!"/>
      </View>
    );
  }
}