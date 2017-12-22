import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Main extends Component {
  static get defaultProps() {
    return {
      title: 'Main Scene'
    };
  }

  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
  }
}