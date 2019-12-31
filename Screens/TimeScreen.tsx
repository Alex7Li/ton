import leaf from '../images/leaf.png'

import React, {Component} from 'react';
import {Text, View, Image, Picker, TouchableHighlight, ImageBackground} from 'react-native';
import {style} from './Styles.tsx';
import { createStackNavigator } from 'react-navigation-stack';

const times = [];
for(var i = 0; i < 60; i++){
    times.push(<Picker.Item key={i} label={String(i)} value={i} />);
}
export default class TimeScreen extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        minuteSelection: 1,
        secondSelection: 0,
     }
    }

  static navigationOptions = {
    title: 'Time Select',
  };

  render() {
    return (
      <View style={{backgroundColor:"#F9F7EB", height: "100%"}}>
          <View style= {style.rowItem}>
            <Picker
              selectedValue={this.state.minuteSelection}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({minuteSelection: itemValue})
              }
              itemStyle={style.smallTextGreen}
              >
              {times}
            </Picker>
            <Text style={style.smallTextGreen}>Minutes</Text>
            <Picker
              selectedValue={this.state.secondSelection}
              style={style.picker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({secondSelection: itemValue})}
              itemStyle={style.smallTextGreen}
              >
              {times}
          </Picker>
          <Text style={style.smallTextGreen}>Seconds</Text>
          </View>
          <TouchableHighlight style={style.buttonStyle} onPress={() => {this.props.navigation.navigate(
          'Meditation', {time: this.state.minuteSelection*60 + this.state.secondSelection})}}>
              <View>
                  <ImageBackground style={style.backgroundImage} source={require('../images/button.png')}>
                  <Text style={style.textBold}>Begin!</Text>
                  </ImageBackground>
              </View>
          </TouchableHighlight>
      </View>
    );
  }
}