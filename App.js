import React, {Component} from 'react';
import {View, TextInput, Text, Button,Image, Assets} from 'react-native-ui-lib';
import {Switch} from 'react-native';
export default class Example extends Component {

  render() {
    return (
      <View flex paddingH-25 paddingT-120>
      <Image source={{uri:'/PNAPP/LCC.png'}} />
        <Text blue text20>Welcome</Text>
        <TextInput text50 placeholder="username" dark10/>
        <TextInput text50 placeholder="password" secureTextEntry dark10/>
        <Switch left />
        <View marginT-100 center>
          <Button text70 green background-orange20 label="Login"/>
          <Button link text70 black label="Sign Up" marginT-20/>
        </View>
      </View>
    );
  }
}