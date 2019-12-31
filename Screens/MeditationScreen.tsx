import React, {Component} from 'react';
import {AsyncStorage, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {style} from './Styles.tsx';
import {Audio} from 'expo-av';

export default class MeditationScreen extends React.Component {
   async makeSound() {
     try {
        const { sound: soundObject, status } = await
           Audio.Sound.createAsync(require('../beep.wav'), { shouldPlay: true });
        await soundObject.playAsync();
        } catch (error) { console.log(error); }
        this.state.beep = setTimeout(()=>this.makeSound(), (2+10*Math.random())*1000);
    }
    constructor(props) {
      super(props);
      this.state = {
          timeMeditated: this.props.navigation.getParam("time"),
          beep: setTimeout(()=>this.makeSound(), (4 + 5*Math.random())*1000),
      }
        setTimeout(() => this.nextScreen(), this.props.navigation.getParam("time")*1000);
        this.getTime();
    }
  static navigationOptions = {
    title: 'Meditate',
  };
  componentWillUnmount() {
    console.log("CLEARED");
    clearTimeout(this.state.beep);
  }

  nextScreen(){
      console.log("CLEARED");
      clearTimeout(this.state.beep);
      this.props.navigation.navigate('Done', {time: this.state.timeMeditated});
  };

  async getTime() {
        try{//https://stackoverflow.com/questions/48534698/values-are-not-stored-in-array-asyncstorage-react-native
            await AsyncStorage.getItem('@time').then((value) => {
                var totalTime =  parseInt(value) + parseInt(this.state.timeMeditated);
                this.setState({timeMeditated: totalTime});
            }).done();
        }catch(error){
            AsyncStorage.setItem('@time', String(0));
        }
  };

  render() {
    return (
      <TouchableOpacity style={{backgroundColor:"#004B6A", height: "100%"}}>
      <View style={style.container}>
      <Text style={{color: "#558997", fontSize: 25}}>tap</Text>
      </View>
      </TouchableOpacity>
    );
  }
}
