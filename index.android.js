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

export default class fb01 extends Component {


  constructor() {
    super();
    this.ref = null;
  }
  componentDidMount() {
    this.ref = firebase.database().ref('Telephone');
    this.ref.on('value', this.handlePostUpdate);
  }
  componentWillUnmount() {
    if (this.ref) {
      this.ref.off('value', this.handlePostUpdate);
    }
  }
  handlePostUpdate = (snapshot) => {
    console.log('Post Content', snapshot.val());
  }
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="LoginForm" component={LoginForm} title="Login Account ;)" initial={true} />
          <Scene key="Booking" component={Booking} title="Your Booking" />
          <Scene key="DetailBooking" component={DetailBooking} title="Detail" />
        </Scene>
      </Router>
    );
  }
}
//      AppRegistry.registerComponent('button', () => button);
     
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           LOGIN
//         </Text>
//         <LoginForm />
//         <Text style={styles.instructions}>
//           {/* To get started, edit index.android.js */}
//         </Text>
//         <Text style={styles.instructions}>
//           {/* Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu */}
//         </Text>
//       </View>
//     );
//   }
// }

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
