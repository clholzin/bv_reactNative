import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View } from 'react-native';

import MyScene from '/MyScene';

export default class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{
                       component: MyScene,
                       title: 'My Initial Scene',
                       passProps: { myProp: 'foo' }
                     }}/*{{ title: 'My Initial Scene', index: 0 }}*/
        renderScene={(route, navigator) =>
          return (
            <MyScene
              title={route.title}

              // Function to call when a new scene should be displayed
              onForward={ () => {
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Scene ' + nextIndex,
                  index: nextIndex,
                });
              }}

              // Function to call to go back to the previous scene
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
            />
          )
        }
      />
    )
  }
}
