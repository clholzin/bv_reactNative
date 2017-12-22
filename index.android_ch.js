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

/*import SimpleNavigationApp from '/SimpleNavigationApp';


class BellaVirtueProject extends Component {
  render() {
    return (<view>
        <SimpleNavigationApp />
      </view>
    );
  }
}
*/
class BellaVirtueProject extends Component {
  render() {
    return (<view>This is react...
      </view>
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

class BellaVirtueProject

AppRegistry.registerComponent('BellaVirtueProject', () => BellaVirtueProject);
