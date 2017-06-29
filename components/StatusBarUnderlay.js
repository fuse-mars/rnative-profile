import React from 'react';
import { View } from 'react-native';
import { Constants } from 'expo';

import Colors from '../constants/Colors';

export default class StatusBarUnderlay extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: Constants.statusBarHeight,
          backgroundColor: Colors.purple,
        }}
      />
    );
  }
}
