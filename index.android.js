/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginForm from './LoginForm';
import Booking from './Booking';
import { Router, Scene } from 'react-native-router-flux';
import firebase from './firebase';
import DetailBooking from './DetailBooking';
import AddList from './AddList';

export default class fb01 extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="LoginForm" component={LoginForm} title="Login Account ;)" initial={true} />
          <Scene key="Booking" component={Booking} title="Your Booking" />
          <Scene key="DetailBooking" component={DetailBooking} title="Detail" />
          <Scene key="AddList" component={AddList} title="Add Booking" />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('fb01', () => fb01);
