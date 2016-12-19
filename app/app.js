import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { provider, store } from 'react-redux';
import Navigation from './navigation';

export default class app extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}
