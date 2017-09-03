import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://clib.psu.ac.th/studyroom/'}}
        style={{marginTop: 20}}
      />
    );
  }
}